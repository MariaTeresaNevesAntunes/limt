import { HeroSection } from "@/components/HeroSection";
import { WhatIsLimit } from "@/components/WhatIsLimit";
import { LateralLimits } from "@/components/LateralLimits";
import InfiniteLimits from "@/components/InfiniteLimits";
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
      <InfiniteLimits />
      
      {/* Navigation */}
      <NavigationDots />
    </div>
  );
};

export default Index;
