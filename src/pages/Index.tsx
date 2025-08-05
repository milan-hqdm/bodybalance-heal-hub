import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import MassageServicesSection from "@/components/MassageServicesSection";
import VirtualTourSection from "@/components/VirtualTourSection";
import SpecialtyModalitiesSection from "@/components/SpecialtyModalitiesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GiftCardSection from "@/components/GiftCardSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyBookingButton from "@/components/StickyBookingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <MassageServicesSection />
      <VirtualTourSection />
      <SpecialtyModalitiesSection />
      <BenefitsSection />
      <GiftCardSection />
      <FAQSection />
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
