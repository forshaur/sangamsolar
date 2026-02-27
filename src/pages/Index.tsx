import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection"; // <-- New Import
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <GallerySection /> {/* <-- New Section Added */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
