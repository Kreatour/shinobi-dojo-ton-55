
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, BarChart3 } from "lucide-react";

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="btn-dojo w-full h-20 text-lg flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Telegram
              </Button>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="btn-crimson w-full h-20 text-lg flex items-center justify-center gap-3">
                <Twitter className="w-6 h-6" />
                X (Twitter)
              </Button>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="btn-shadow w-full h-20 text-lg flex items-center justify-center gap-3">
                <BarChart3 className="w-6 h-6" />
                DexScreener (25k MC)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
