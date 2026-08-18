"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGO_SIZE = 64;
const RING_GAP = 6;
const RING_THICKNESS = 3;
const OUTER_SIZE = LOGO_SIZE + RING_GAP * 2 + RING_THICKNESS * 2;

const FRICTION = 0.995;
const IDLE_FLOOR_SPEED = 0.5;
const ACTIVE_LOW_THRESHOLD = 2;
const ACTIVE_HIGH_THRESHOLD = 4;
const MAX_FLING_SPEED = 45;

const IDLE_COLOR = "#f4548a";
const ACTIVE_COLOR = "#ffffff";

const FRAME_MS = 1000 / 60;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FloatingBrandBall() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const ballRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef({ x: 120, y: 160 });
  const velRef = useRef({ vx: 1.2, vy: 0.9 });
  const draggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const pointerSamplesRef = useRef<{ x: number; y: number; t: number }[]>([]);
  const ringStateRef = useRef<"idle" | "active">("idle");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isDesktop) return;

    posRef.current = {
      x: clamp(posRef.current.x, 0, window.innerWidth - OUTER_SIZE),
      y: clamp(posRef.current.y, 0, window.innerHeight - OUTER_SIZE),
    };

    const applyRingColor = (color: string) => {
      ringRef.current?.style.setProperty("--ring-color", color);
    };

    const updateRingState = (speed: number) => {
      if (ringStateRef.current === "active") {
        if (speed < ACTIVE_LOW_THRESHOLD) {
          ringStateRef.current = "idle";
          applyRingColor(IDLE_COLOR);
        }
      } else if (speed > ACTIVE_HIGH_THRESHOLD) {
        ringStateRef.current = "active";
        applyRingColor(ACTIVE_COLOR);
      }
    };

    const step = () => {
      if (!draggingRef.current) {
        const pos = posRef.current;
        const vel = velRef.current;

        pos.x += vel.vx;
        pos.y += vel.vy;

        const maxX = window.innerWidth - OUTER_SIZE;
        const maxY = window.innerHeight - OUTER_SIZE;

        if (pos.x <= 0) {
          pos.x = 0;
          vel.vx *= -1;
        } else if (pos.x >= maxX) {
          pos.x = maxX;
          vel.vx *= -1;
        }

        if (pos.y <= 0) {
          pos.y = 0;
          vel.vy *= -1;
        } else if (pos.y >= maxY) {
          pos.y = maxY;
          vel.vy *= -1;
        }

        vel.vx *= FRICTION;
        vel.vy *= FRICTION;

        let speed = Math.hypot(vel.vx, vel.vy);
        if (speed < IDLE_FLOOR_SPEED) {
          if (speed < 1e-4) {
            const angle = Math.random() * Math.PI * 2;
            vel.vx = Math.cos(angle) * IDLE_FLOOR_SPEED;
            vel.vy = Math.sin(angle) * IDLE_FLOOR_SPEED;
          } else {
            const scale = IDLE_FLOOR_SPEED / speed;
            vel.vx *= scale;
            vel.vy *= scale;
          }
          speed = IDLE_FLOOR_SPEED;
        }

        updateRingState(speed);
      }

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const handleResize = () => {
      const maxX = window.innerWidth - OUTER_SIZE;
      const maxY = window.innerHeight - OUTER_SIZE;
      posRef.current.x = clamp(posRef.current.x, 0, maxX);
      posRef.current.y = clamp(posRef.current.y, 0, maxY);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, isDesktop]);

  if (!mounted || !isDesktop) return null;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    draggingRef.current = true;
    ringStateRef.current = "active";
    ringRef.current?.style.setProperty("--ring-color", ACTIVE_COLOR);

    const rect = ballRef.current!.getBoundingClientRect();
    dragOffsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    pointerSamplesRef.current = [{ x: e.clientX, y: e.clientY, t: performance.now() }];

    ballRef.current?.setPointerCapture(e.pointerId);
    ballRef.current!.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const maxX = window.innerWidth - OUTER_SIZE;
    const maxY = window.innerHeight - OUTER_SIZE;
    posRef.current.x = clamp(e.clientX - dragOffsetRef.current.x, 0, maxX);
    posRef.current.y = clamp(e.clientY - dragOffsetRef.current.y, 0, maxY);

    const samples = pointerSamplesRef.current;
    samples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (samples.length > 6) samples.shift();
  };

  const releaseDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (ballRef.current) ballRef.current.style.cursor = "grab";

    const samples = pointerSamplesRef.current;
    if (samples.length >= 2) {
      const first = samples[0];
      const last = samples[samples.length - 1];
      const dt = last.t - first.t;
      if (dt > 0) {
        velRef.current.vx = clamp(
          ((last.x - first.x) / dt) * FRAME_MS,
          -MAX_FLING_SPEED,
          MAX_FLING_SPEED
        );
        velRef.current.vy = clamp(
          ((last.y - first.y) / dt) * FRAME_MS,
          -MAX_FLING_SPEED,
          MAX_FLING_SPEED
        );
      }
    }
    pointerSamplesRef.current = [];
    ringStateRef.current = "active";
    ringRef.current?.style.setProperty("--ring-color", ACTIVE_COLOR);
  };

  return (
    <div
      ref={ballRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releaseDrag}
      onPointerCancel={releaseDrag}
      className="floating-ball"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: OUTER_SIZE,
        height: OUTER_SIZE,
        zIndex: 100,
        cursor: "grab",
        touchAction: "none",
        willChange: "transform",
      }}
    >
      <div ref={ringRef} className="floating-ball-ring">
        <div className="floating-ball-logo">
          <Image
            src="/logo.jpg"
            alt="XiTiZ"
            fill
            draggable={false}
            className="rounded-full object-cover select-none"
            sizes={`${LOGO_SIZE}px`}
          />
        </div>
      </div>
    </div>
  );
}
