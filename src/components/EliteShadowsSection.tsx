import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import masterShogunImg from "@/assets/master-shogun.png";

interface EliteNinja {
  name: string;
  rank: string;
  xAccount: string;
  image: string;
}

const eliteNinjas: EliteNinja[] = [
  {
    name: "Chibhanzi",
    rank: "Master Shogun",
    xAccount: "https://x.com/lord_chibhanzii",
    image: masterShogunImg,
  },
];

export const EliteShadowsSection = () => {
  return (
    <section className="py-20 px-4" id="elite-shadows">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-4">
          <span className="text-glow-purple">Elite Shadows</span>
        </h2>
        <p className="text-center text-ninja-text font-rajdhani text-xl mb-12 max-w-2xl mx-auto">
          Reputable Ninjas of the Shinobi Clan
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eliteNinjas.map((ninja) => (
            <div 
              key={ninja.name} 
              className="dojo-card group hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
                <img 
                  src={ninja.image} 
                  alt={ninja.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="text-center space-y-2 mb-6">
                <p className="text-sm font-rajdhani font-bold text-katana-blue uppercase tracking-wider">
                  {ninja.rank}
                </p>
                <h3 className="font-orbitron text-2xl font-bold text-ninja-text">
                  {ninja.name}
                </h3>
              </div>
              
              <a 
                href={ninja.xAccount} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Button className="btn-crimson w-full flex items-center justify-center gap-2">
                  <X className="w-5 h-5" />
                  Follow on X
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
