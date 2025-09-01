
import { Button } from "@/components/ui/button";
import { X, BarChart3 } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section className="py-20 px-4" id="community">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-8">
          <span className="text-glow-purple">Community</span>
        </h2>
        
        <div className="dojo-card max-w-4xl mx-auto text-center">
          <p className="text-2xl font-rajdhani font-bold text-ninja-text mb-12">
            The ninja doesn't fight alone — the dojo is strong.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="https://x.com/shinobionton" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="btn-crimson w-full h-20 text-lg flex items-center justify-center gap-3">
                <X className="w-6 h-6" />
                X (Twitter)
              </Button>
            </a>
            
            <a href="https://dexscreener.com/ton/EQCsSZk2VI3oQfInyyjuvea08AFgfIcxxIShcVq1b9c5HGde" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="btn-shadow w-full h-20 text-lg flex items-center justify-center gap-3">
                <BarChart3 className="w-6 h-6" />
                DexScreener
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
