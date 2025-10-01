import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Partner } from "@/components/Partner";
import { Offerings } from "@/components/Offerings";
import { Pricing } from "@/components/Pricing";
import { Learn } from "@/components/Learn";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="partner">
          <Partner />
        </div>
        <div id="offerings">
          <Offerings />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="learn">
          <Learn />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
