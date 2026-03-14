import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";

export const metadata = {
  title: "Services | JenOgechi",
  description: "What I build — landing pages, websites, and MVP builds for founders and small businesses.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  );
}
