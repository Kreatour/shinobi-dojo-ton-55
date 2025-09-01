import { Button } from "@/components/ui/button";
import { Swords, Twitter, BarChart3, ShoppingCart, Copy, X } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "EQCL2JFltDVh1mU6CLc7KvzGD7DmpwHWHkok_EnqQlaycfgZ";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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
        {/* Ninja Sticker - Enlarged by 1.5x */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/src/data/ShinobiAssassin_10_🤫.gif" 
            alt="Shinobi Assassin" 
            className="w-48 h-48 object-contain filter drop-shadow-[0_0_30px_hsl(200_100%_50%_/_0.4)] hover:drop-shadow-[0_0_50px_hsl(200_100%_50%_/_0.8)] transition-all duration-300 hover:scale-110"
          />
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
        
        <div className="text-2xl font-orbitron font-bold mb-8">
          <span className="text-glow-red">🔥 Meme first.</span>{" "}
          <span className="text-glow-purple">Ninja forever.</span>
        </div>

        {/* Copy CA Section */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <div className="text-sm font-rajdhani font-semibold text-mist-text">Contract Address:</div>
          <div className="flex items-center gap-2 bg-dojo-steel/20 border border-katana-blue/30 rounded-lg p-3">
            <code className="font-mono text-sm text-katana-cyan break-all">
              {contractAddress}
            </code>
            <Button
              onClick={copyToClipboard}
              className="btn-shadow h-8 w-8 p-0 flex items-center justify-center"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          {copied && (
            <div className="text-sm text-glow-blue font-rajdhani font-semibold">
              ✅ Copied to clipboard!
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://t.me/stonks_sniper_bot?start=id=chibhanzi=EQCL2JFltDVh1mU6CLc7KvzGD7DmpwHWHkok_EnqQlaycfgZ" target="_blank" rel="noopener noreferrer">
            <Button className="ninja-buy-btn text-xl px-12 py-6 font-orbitron font-bold flex items-center gap-3 group">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              Buy $SHINOBI
            </Button>
          </a>
          <a href="https://t.me/shinobionton" target="_blank" rel="noopener noreferrer">
            <Button className="ninja-dojo-btn text-xl px-12 py-6 font-orbitron font-bold group">
              Join the Dojo
            </Button>
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a href="https://x.com/shinobionton" target="_blank" rel="noopener noreferrer" className="text-katana-cyan hover:text-katana-blue transition-colors hover:scale-110 transform duration-300">
            <X className="w-8 h-8" />
          </a>
          <a href="https://dexscreener.com/ton/EQCsSZk2VI3oQfInyyjuvea08AFgfIcxxIShcVq1b9c5HGde" target="_blank" rel="noopener noreferrer" className="text-katana-cyan hover:text-katana-blue transition-colors hover:scale-110 transform duration-300">
            <BarChart3 className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
