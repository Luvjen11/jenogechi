import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About | JenOgechi",
  description: "About Jen and Jenogechi Studio — developer, builder, and professional overthinker.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
