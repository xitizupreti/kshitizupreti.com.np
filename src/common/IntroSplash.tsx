"use client";

import { useEffect, useState } from "react";

const BRAND = "XiTiZ";
const TAGLINE = "Frontend Developer • IT Officer";

const CASCADE_START_MS = 500;
const CASCADE_STAGGER_MS = 45;
const EXIT_START_MS = 2900;
const EXIT_DURATION_MS = 400;

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setExiting(true), EXIT_START_MS);
    const removeTimer = setTimeout(
      () => setVisible(false),
      EXIT_START_MS + EXIT_DURATION_MS
    );

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  if (!visible) return null;

  const restLetters = BRAND.slice(1).split("");

  return (
    <div
      className={`splash-overlay ${exiting ? "splash-overlay-exit" : ""}`}
      aria-hidden="true"
    >
      <div className="splash-grid" />
      <div className="splash-glow" />
      <div className="splash-content">
        <div className="splash-wordmark">
          <span className="splash-letter splash-letter-first">
            <span className="splash-letter-ring" />
            <span className="splash-letter-glyph">{BRAND[0]}</span>
          </span>
          {restLetters.map((char, i) => (
            <span
              key={i}
              className="splash-letter splash-letter-cascade"
              style={{
                animationDelay: `${CASCADE_START_MS + i * CASCADE_STAGGER_MS}ms`,
              }}
            >
              {char}
            </span>
          ))}
          <span className="splash-shine" />
        </div>
        <p className="splash-tagline">{TAGLINE}</p>
      </div>
    </div>
  );
}
