# kshitizupreti.com.np – Personal Portfolio

This is my personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It showcases my profile, professional experience, and skills as a **Frontend Developer & NOC Engineer**.

---

## 🧰 Tech Stack

- **Frameworks:** Next.js, React.js
- **Languages:** TypeScript, JavaScript
- **Styling:** Tailwind CSS, Sass
- **Deployment:** Vercel

---

## 📌 Features

- Responsive design
- Dynamic hero and about sections
- Contact page with social links
- Simple blog for life updates (non-functional)
- Dynamic project showcase with Markdown-rendered READMEs
- Intro splash animation on every full page load (glowing letter reveal, shine sweep, animated grid/glow, plain CSS keyframes)
- Draggable floating brand ball with real `requestAnimationFrame` physics (elastic bounce, friction, fling-on-release), desktop only

---

## 🕘 Recent Updates

- **Intro splash animation** — full-screen overlay in the root layout that plays on every hard page load (not on client-side navigation). Animates the wordmark letter-by-letter with a glowing ring on the first letter, a diagonal shine sweep, a tagline fade-up, and a breathing background glow with a faint grid pattern. Locks body scroll while visible and fades out (scale + blur) after ~3.3s.
- **Draggable floating brand ball** — a physics-driven circular brand element fixed to the viewport, rendered site-wide (desktop only). Bounces elastically off the window edges, applies friction with an idle-drift floor so it never fully stops, and can be grabbed/dragged/flung via pointer events. Its ring color switches instantly on grab/throw and reverts once it settles back to idle speed, using two separate thresholds to avoid flicker.
- **Dynamic project showcase** — projects section now renders GitHub README content as Markdown (`react-markdown` + `remark-gfm`).
- **Header & footer polish** — refined header/footer layout, GitHub icon inversion for dark mode, and improved mobile spacing.
- **Framer Motion adoption** — About, Home, Blog, Contact, and Footer components modernized with Framer Motion animations and a consistent color palette.
- **Content refresh** — updated About/Home copy, CV, and life-events descriptions.

---

## 🌐 Live Site

Visit: [kshitizupreti.com.np](https://www.kshitizupreti.com.np)

---

## 📫 Contact

- Email: [upreti.kshitiz.ku@gmail.com](mailto:upreti.kshitiz.ku@gmail.com)
- LinkedIn: [linkedin.com/in/kshitizupreti](https://www.linkedin.com/in/kshitizupreti)
- GitHub: [github.com/xitizupreti](https://github.com/xitizupreti)

---

> Built with ❤️ by Kshitiz Upreti
