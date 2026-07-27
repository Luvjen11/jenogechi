import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import StudioPillar from "@/components/home/StudioPillar";
import HowIWork from "@/components/home/HowIWork";
import Testimonials from "@/components/home/Testimonials";
import Portfolio from "@/components/home/Portfolio";
import AboutSnippet from "@/components/home/AboutSnippet";
import ContentPreview from "@/components/home/ContentPreview";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JenOgechi | Websites, Landing Pages & MVP Builds",
  description:
    "Jenogechi Studio — a developer building clean, conversion-focused websites, landing pages, and MVPs for founders, creators, and small businesses.",
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StudioPillar />
      <HowIWork />
      <Testimonials />
      <Portfolio />
      <AboutSnippet />
      <ContentPreview />
      <Contact />
      <Footer />
    </div>
  );
}
