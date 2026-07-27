import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentPage from "@/components/ContentPage";

export const metadata = {
  title: "Content | JenOgechi",
  description: "Where I post — TikTok, YouTube, and updates on SelfSaga.",
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
