import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkPage from "@/components/WorkPage";

export const metadata = {
  title: "Work | JenOgechi",
  description: "Selected work — a curated selection of projects, experiments, and digital products.",
};

export default function Work() {
  return (
    <>
      <Navbar />
      <WorkPage />
      <Footer />
    </>
  );
}
