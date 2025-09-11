import { HeroSection } from "@/components/HeroSection";
import { WhatIsLimit } from "@/components/WhatIsLimit";
import { LateralLimits } from "@/components/LateralLimits";
import { NavigationDots } from "@/components/NavigationDots";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* Educational Content */}
      <WhatIsLimit />
      <LateralLimits />
      
      {/* Navigation */}
      <NavigationDots />
    </div>
  );
};

export default Index;
