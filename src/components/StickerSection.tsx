
import { stickerData } from "@/data/stickers";

export const StickerSection = () => {
  // Show only first 6 stickers for a cleaner look
  const featuredStickers = stickerData.slice(0, 6);

  return (
    <section className="py-20 px-4" id="stickers">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-8">
          <span className="text-glow-blue">Sticker Narrative</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl font-rajdhani font-medium text-mist-text text-center leading-relaxed mb-8">
            The soul of Shinobi comes from Telegram's OG sticker pack — each sticker tells a story: 
            stealth, strength, and mischief. We bring these stickers to life on-chain. 
            Every sticker = part of the meme lore.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xl font-orbitron font-bold">
            <span className="text-glow-red">💥 Collect them.</span>
            <span className="text-glow-blue">💥 Meme them.</span>
            <span className="text-glow-purple">💥 Live them.</span>
          </div>
        </div>
        
        {/* Minimalist sticker grid - more ninja-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {featuredStickers.map((sticker) => (
            <div 
              key={sticker.id} 
              className="group cursor-pointer text-center transform transition-all duration-300 hover:scale-110"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={sticker.imageUrl} 
                  alt={sticker.name}
                  className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_20px_hsl(200_100%_50%_/_0.6)] transition-all duration-300"
                />
              </div>
              <p className="text-sm font-rajdhani font-semibold text-shadow-text group-hover:text-mist-text transition-colors duration-300">
                {sticker.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
