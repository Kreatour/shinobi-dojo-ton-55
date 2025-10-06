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

const placeholderSlots = Array(6).fill(null);

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
        
        {/* Master Shogun - Featured */}
        <div className="max-w-md mx-auto mb-16">
          {eliteNinjas.map((ninja, index) => (
            <div 
              key={ninja.name}
              className="group relative"
            >
              {/* Outer glow container - larger for master */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-pulse"></div>
              
              {/* Main card - enhanced for master */}
              <div className="relative bg-dojo-void/95 backdrop-blur-sm border-4 border-purple-500/50 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-purple-500/80 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.6)]">
                
                {/* Corner decorations - larger */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-katana-blue rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-katana-blue rounded-br-3xl"></div>
                
                {/* Master badge */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-red-600 px-4 py-2 rounded-full">
                  <Flame className="w-5 h-5 text-white animate-pulse" />
                  <span className="text-white font-orbitron font-bold text-sm">MASTER</span>
                </div>

                {/* Image container */}
                <div className="relative mb-8 overflow-hidden rounded-2xl aspect-square">
                  {/* Inner shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dojo-void/90 z-10 group-hover:to-purple-900/70 transition-all duration-500"></div>
                  
                  {/* Glowing border on hover */}
                  <div className="absolute inset-0 border-4 border-purple-500/50 rounded-2xl z-10 transition-all duration-500 group-hover:border-purple-400/70"></div>
                  
                  <img 
                    src={ninja.image} 
                    alt={ninja.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Rank label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-purple-600/95 to-red-600/95 backdrop-blur-sm rounded-xl px-6 py-3 border-2 border-purple-400/50">
                      <p className="text-sm font-rajdhani font-black text-white uppercase tracking-widest text-center">
                        {ninja.rank}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Name section */}
                <div className="text-center space-y-4 mb-8">
                  <h3 className="font-orbitron text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-katana-blue via-purple-400 to-crimson-red group-hover:scale-105 transition-transform duration-300">
                    {ninja.name}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-katana-blue to-transparent"></div>
                    <Swords className="w-5 h-5 text-katana-blue" />
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-katana-blue to-transparent"></div>
                  </div>
                </div>
                
                {/* Follow button */}
                <a 
                  href={ninja.xAccount} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <Button className="btn-crimson w-full h-16 text-xl flex items-center justify-center gap-3 group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-3">
                      <X className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-orbitron font-bold">Follow Master</span>
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Elite Ninjas - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholderSlots.map((_, index) => (
            <div 
              key={`placeholder-${index}`}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Main card - placeholder */}
              <div className="relative bg-dojo-void/60 backdrop-blur-sm border-2 border-katana-blue/20 rounded-2xl p-4 overflow-hidden transition-all duration-500 hover:border-katana-blue/40 hover:bg-dojo-void/70">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-katana-blue/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-katana-blue/30 rounded-br-2xl"></div>

                {/* Image placeholder */}
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-dojo-void via-katana-blue/10 to-purple-900/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dojo-void/80"></div>
                  <Swords className="w-16 h-16 text-katana-blue/30 relative z-10" />
                </div>
                
                {/* Name placeholder */}
                <div className="text-center space-y-2 mb-4">
                  <p className="text-xs font-rajdhani font-bold text-katana-blue/50 uppercase tracking-wider">
                    Elite Shadow
                  </p>
                  <h3 className="font-orbitron text-lg font-bold text-ninja-text/40">
                    Coming Soon
                  </h3>
                </div>
                
                {/* Button placeholder */}
                <Button 
                  disabled 
                  className="w-full h-12 bg-dojo-void/50 border border-katana-blue/20 text-ninja-text/30 cursor-not-allowed hover:bg-dojo-void/50"
                >
                  <span className="font-rajdhani font-bold text-sm">Awaiting Ninja</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
