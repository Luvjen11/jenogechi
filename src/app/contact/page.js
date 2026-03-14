import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact | JenOgechi",
  description: "Get in touch — landing pages, websites, MVP builds, and creative collaborations.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
