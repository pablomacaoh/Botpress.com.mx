
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LearnSection from "@/components/sections/LearnSection";

const Learn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LearnSection />
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
