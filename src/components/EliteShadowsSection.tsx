import { Button } from "@/components/ui/button";
import { X, Swords, Flame } from "lucide-react";
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
    <section className="relative py-20 px-4 overflow-hidden" id="elite-shadows">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <Swords className="w-10 h-10 text-katana-blue animate-pulse" />
            <h2 className="font-orbitron text-4xl md:text-6xl font-black">
              <span className="text-glow-purple">Elite Shadows</span>
            </h2>
            <Swords className="w-10 h-10 text-katana-blue animate-pulse" />
          </div>
          <p className="text-center text-ninja-text font-rajdhani text-2xl font-bold max-w-2xl mx-auto">
            Legendary Warriors of the Shinobi Clan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eliteNinjas.map((ninja, index) => (
            <div 
              key={ninja.name}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Outer glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-dojo-void/90 backdrop-blur-sm border-2 border-katana-blue/30 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-purple-500/60 group-hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-katana-blue/50 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-katana-blue/50 rounded-br-2xl"></div>
                
                {/* Rank badge */}
                <div className="absolute top-4 right-4 z-20">
                  <Flame className="w-6 h-6 text-crimson-red animate-pulse" />
                </div>

                {/* Image container */}
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                  {/* Inner shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dojo-void/80 z-10 group-hover:to-purple-900/60 transition-all duration-500"></div>
                  
                  {/* Glowing border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-xl z-10 transition-all duration-500"></div>
                  
                  <img 
                    src={ninja.image} 
                    alt={ninja.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Rank label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-purple-600/90 to-red-600/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-400/30">
                      <p className="text-xs font-rajdhani font-black text-white uppercase tracking-widest text-center">
                        {ninja.rank}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Name section */}
                <div className="text-center space-y-3 mb-6">
                  <h3 className="font-orbitron text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-katana-blue via-purple-400 to-crimson-red group-hover:scale-105 transition-transform duration-300">
                    {ninja.name}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-katana-blue to-transparent"></div>
                    <Swords className="w-4 h-4 text-katana-blue" />
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-katana-blue to-transparent"></div>
                  </div>
                </div>
                
                {/* Follow button */}
                <a 
                  href={ninja.xAccount} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <Button className="btn-crimson w-full h-14 text-lg flex items-center justify-center gap-3 group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-3">
                      <X className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-orbitron font-bold">Follow Master</span>
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
