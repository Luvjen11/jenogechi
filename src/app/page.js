import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioPillar from "@/components/StudioPillar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StudioPillar />
      <Portfolio />
    </div>
  );
}
