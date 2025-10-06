
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { StickerSection } from "@/components/StickerSection";
import { EliteShadowsSection } from "@/components/EliteShadowsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TickerBar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <StickerSection />
      <EliteShadowsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
