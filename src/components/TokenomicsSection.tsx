
import { Flame, Shield, Swords, Users } from "lucide-react";

export const TokenomicsSection = () => {
  return (
    <section className="py-20 px-4" id="tokenomics">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-12">
          <span className="text-glow-blue">Tokenomics</span>
        </h2>
        
        <div className="ninja-scroll max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-dojo-shadow/50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-katana-blue to-katana-cyan rounded-lg flex items-center justify-center">
                <Swords className="w-6 h-6 text-dojo-void" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-glow-blue mb-1">💠 Supply</h3>
                <p className="text-mist-text font-rajdhani">1,000,000 $SHINOBI</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-dojo-shadow/50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blood-red to-crimson-glow rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-ninja-text" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-glow-red mb-1">🔥 Burns</h3>
                <p className="text-mist-text font-rajdhani">The dojo consumes what is unnecessary.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-dojo-shadow/50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-royal-purple to-mystic-violet rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-ninja-text" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-glow-purple mb-1">⚔️ Liquidity</h3>
                <p className="text-mist-text font-rajdhani">Locked tighter than a ninja's grip.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-dojo-shadow/50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-katana-cyan to-royal-purple rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-dojo-void" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-glow-blue mb-1">🎭 Community Power</h3>
                <p className="text-mist-text font-rajdhani">100% fueled by memes, ninjas, and YOU.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
