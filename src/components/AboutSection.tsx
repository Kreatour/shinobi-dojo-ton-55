
import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-12">
            <span className="text-glow-purple">About Shinobi</span>
          </h2>
          
          {/* Ancient Scroll Container */}
          <div className="relative perspective-1000">
            {/* Scroll Rod Top */}
            <div className="flex justify-center mb-4">
              <div className="w-80 h-4 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full shadow-lg"></div>
            </div>
            
            {/* Main Scroll */}
            <div 
              className={`ninja-ancient-scroll transition-all duration-1000 ease-out transform-gpu ${
                isVisible 
                  ? 'animate-scroll-unroll opacity-100 scale-100' 
                  : 'animate-scroll-roll opacity-70 scale-95 -translate-y-8'
              }`}
            >
              {/* Scroll Paper */}
              <div className="relative bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 border-2 border-amber-700/30 rounded-lg shadow-2xl overflow-hidden">
                {/* Aged Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5"></div>
                
                {/* Scroll Content */}
                <div className="relative p-8 md:p-12">
                  {/* Ancient Text Styling */}
                  <div className="space-y-6 text-lg md:text-xl font-rajdhani font-medium leading-relaxed">
                    <div className="relative">
                      <div className="absolute -left-6 top-0 text-4xl text-amber-700/40 font-serif">❝</div>
                      <p className="text-amber-900 italic pl-8">
                        Once just a sticker in Telegram's legendary pack, Shinobi was forgotten in the shadows… 
                        until the community brought him back as a token of unity, fun, and power.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-amber-600/30 pl-6">
                      <p className="text-amber-800">
                        <span className="text-katana-blue font-bold drop-shadow-sm">$SHINOBI</span> isn't just another coin. 
                        It's a sticker narrative turned memecoin, weaving culture, memes, and ninja spirit 
                        into one unstoppable movement on the TON blockchain.
                      </p>
                    </div>
                    
                    <div className="text-center py-6">
                      <div className="inline-block bg-amber-100/50 border border-amber-300/50 rounded-lg px-6 py-4">
                        <div className="text-2xl font-orbitron font-bold">
                          <span className="text-blood-red drop-shadow-sm">🥷 From sticker…</span>{" "}
                          <span className="text-katana-blue drop-shadow-sm">to dojo…</span>{" "}
                          <span className="text-royal-purple drop-shadow-sm">to destiny.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ancient Seal/Stamp */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-blood-red/10 rounded-full border-2 border-blood-red/30 flex items-center justify-center">
                    <span className="text-blood-red text-2xl">🥷</span>
                  </div>
                </div>
                
                {/* Scroll Edge Effects */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700/20 via-amber-600/10 to-amber-700/20"></div>
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700/20 via-amber-600/10 to-amber-700/20"></div>
              </div>
            </div>
            
            {/* Scroll Rod Bottom */}
            <div className="flex justify-center mt-4">
              <div className="w-80 h-4 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
