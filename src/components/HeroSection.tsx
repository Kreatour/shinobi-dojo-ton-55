
import { Button } from "@/components/ui/button";
import { Swords, MessageCircle, Twitter, BarChart3, ShoppingCart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-katana-blue rounded-full animate-ninja-fade"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blood-red rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-royal-purple rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 animate-shuriken-spin">
          <Swords className="w-8 h-8 text-katana-blue" />
        </div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Ninja Sticker */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_50px_hsl(200_100%_50%_/_0.5)]">
            <img 
              src="/src/data/ShinobiAssassin_10_🤫.gif" 
              alt="Shinobi Assassin" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6">
          <span className="text-glow-blue">The Ninja</span>
          <br />
          <span className="text-glow-red">Has Awakened</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-rajdhani font-medium text-mist-text mb-4 max-w-4xl mx-auto leading-relaxed">
          From the OG Telegram Shinobi sticker pack, reborn through a Community Takeover (CTO) on TON.
        </p>
        
        <p className="text-lg md:text-xl text-shadow-text mb-8 max-w-3xl mx-auto">
          A symbol of stealth, speed, and strength — now a memecoin powered by the people.
        </p>
        
        <div className="text-2xl font-orbitron font-bold mb-12">
          <span className="text-glow-red">🔥 Meme first.</span>{" "}
          <span className="text-glow-purple">Ninja forever.</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button className="btn-dojo text-xl px-12 py-6 font-orbitron font-bold flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            Buy $SHINOBI
          </Button>
          <Button className="btn-crimson text-xl px-12 py-6 font-orbitron font-bold">
            Join the Dojo
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-katana-cyan hover:text-katana-blue transition-colors">
            <MessageCircle className="w-8 h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-katana-cyan hover:text-katana-blue transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-katana-cyan hover:text-katana-blue transition-colors">
            <BarChart3 className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
