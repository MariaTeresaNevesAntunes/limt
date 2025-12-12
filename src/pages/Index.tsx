import { HeroSection } from "@/components/HeroSection";
import { WhatIsLimit } from "@/components/WhatIsLimit";
import { LateralLimits } from "@/components/LateralLimits";
import InfiniteLimits from "@/components/InfiniteLimits";
import IndeterminationsSection from "@/components/IndeterminationsSection";
import { NavigationDots } from "@/components/NavigationDots";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MTNA – Matemática Sem Limites"
        description="Plataforma educativa gratuita para aprender limites matemáticos. Explicações claras, exemplos práticos e exercícios sobre limites laterais, infinitos e indeterminações."
      />
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <div id="hero" className="pt-16">
        <HeroSection />
      </div>
      
      {/* Educational Content */}
      <WhatIsLimit />
      <LateralLimits />
      <InfiniteLimits />
      <IndeterminationsSection />
      
      {/* Navigation */}
      <NavigationDots />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
