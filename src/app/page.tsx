import Hero from "@/components/Hero";
import AboutECell from "@/components/AboutECell";
import TeamDesktop from "@/components/TeamDesktop";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlogsInsights from "@/components/BlogsInsights";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <AboutECell />
      <TeamDesktop />
      <Events />
      <BlogsInsights />
      <Contact />
      <Footer />
    </main>
  );
}
