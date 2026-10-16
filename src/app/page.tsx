import Hero from "@/components/Hero";
import AboutECell from "@/components/AboutECell";
import TeamDesktop from "@/components/TeamDesktop";
import EurekaPitch2026 from "@/components/EurekaPitch2026";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <AboutECell />
      <TeamDesktop />
      <EurekaPitch2026 />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
