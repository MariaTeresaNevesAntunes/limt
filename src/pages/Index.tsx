import { HeroSection } from "@/components/HeroSection";
import { WhatIsLimit } from "@/components/WhatIsLimit";
import { LateralLimits } from "@/components/LateralLimits";
import InfiniteLimits from "@/components/InfiniteLimits";
import IndeterminationsSection from "@/components/IndeterminationsSection";
import { NavigationDots } from "@/components/NavigationDots";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
