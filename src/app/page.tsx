import Hero from "@/components/Hero";
import AboutECell from "@/components/AboutECell";
import AboutSJCEM from "@/components/AboutSJCEM";
import TeamDesktop from "@/components/TeamDesktop";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <AboutECell />
      <AboutSJCEM />
      <TeamDesktop />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
