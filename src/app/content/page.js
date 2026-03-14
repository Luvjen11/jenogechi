import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage from "@/components/ContentPage";

export const metadata = {
  title: "Content & Ideas | JenOgechi",
  description: "Documenting what I'm building, learning, and experimenting with — tech projects, personal systems, and startup ideas.",
};

export default function Content() {
  return (
    <>
      <Navbar />
      <ContentPage />
      <Footer />
    </>
  );
}
