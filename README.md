# E-Cell SJCEM Website

<!-- TODO: add screenshot/demo GIF of the Day-Night scroll hero here -->

A premium marketing and portfolio site for the Institution's Innovation Council's (IIC) Entrepreneurship Cell at St. John College of Engineering and Management (SJCEM). The site features a signature scroll-driven cinematic experience where the environment seamlessly transitions from dawn to deep night as the user progresses through the content.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: 
  - [GSAP](https://gsap.com/) + ScrollTrigger (for the global day-night engine)
  - [Framer Motion](https://www.framer.com/motion/) (for layout animations, 3D tilts, and micro-interactions)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)

## ✨ Features

- **Day-Night Cinematic Engine**: A GSAP-powered global background that scrubs through Dawn, Morning, Noon, Golden Hour, Dusk, and Night strictly tied to the user's scroll progress. All UI elements (shadows, glows, scrollbars) dynamically react to the current time of day.
- **Animated Hero**: A dynamic canvas-based constellation network with a premium dawn gradient aesthetic.
- **Interactive Team Desktop**: A "Windows Desktop" metaphor for the team section featuring draggable, spring-animated folder windows.
- **Event Showcase**: A performant CSS/Framer 3D-tilt event grid with smooth layout filtering.
- **Unique Contact Experience**: A custom "Send a Signal" form that shoots animated light trails into the night sky upon submission.
- **Custom Cursor & Scrollbar**: High-end custom mouse cursor with interaction morphing, paired with a scrollbar that changes color based on the time of day.
- **Responsive & Accessible**: Frosted glassmorphism (`backdrop-blur`) and dynamic text shadows ensure AA contrast readability across all background colors on both desktop and mobile.

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/daystar-1nine/E-Cell.git
   cd E-Cell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/app/` - Next.js App Router layout, page, and global CSS.
- `src/components/` - All React components:
  - `DayNightBackground.tsx` - The core GSAP scroll-trigger engine.
  - `Hero.tsx`, `AboutECell.tsx`, `TeamDesktop.tsx`, `Events.tsx`, `Contact.tsx` - The main sections of the site.
  - `Navigation.tsx` & `Cursor.tsx` - Global UI overlays.
- `src/utils/` - Data configuration files for easy content management.

## 📝 Content & Data Placeholders

Currently, the site is structurally complete but populated with placeholders pending final handoff content:
- **Team Members**: Located in `src/utils/teams.ts`. Replace the placeholder names/roles/images here.
- **Events**: Located in `src/utils/events.ts`. Update the event descriptions, dates, and images here.
- **Contact Info**: Placeholder email and location are currently hardcoded in `src/components/Contact.tsx`. 

## 🤝 Contributing

1. Create a new branch for your feature or fix (e.g., `feature/add-new-event` or `fix/nav-bug`).
2. Make your changes and test thoroughly.
3. Open a Pull Request against the `main` branch with a clear description of the changes.

## 📄 License

This project is licensed under the MIT License.
