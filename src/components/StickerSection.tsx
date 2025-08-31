
import { stickerData } from "@/data/stickers";

export const StickerSection = () => {
  return (
    <section className="py-20 px-4" id="stickers">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-8">
          <span className="text-glow-blue">Sticker Narrative</span>
        </h2>
        
        <div className="dojo-card max-w-5xl mx-auto mb-12">
          <p className="text-lg md:text-xl font-rajdhani font-medium text-mist-text text-center leading-relaxed">
            The soul of Shinobi comes from Telegram's OG sticker pack — each sticker tells a story: 
            stealth, strength, and mischief. We bring these stickers to life on-chain. 
            Every sticker = part of the meme lore.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xl font-orbitron font-bold">
            <span className="text-glow-red">💥 Collect them.</span>
            <span className="text-glow-blue">💥 Meme them.</span>
            <span className="text-glow-purple">💥 Live them.</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stickerData.map((sticker) => (
            <div 
              key={sticker.id} 
              className="sticker-hover bg-gradient-to-br from-dojo-steel to-dojo-shadow p-6 rounded-2xl border border-katana-blue/20 text-center cursor-pointer"
            >
              <div className="text-6xl mb-4">{sticker.emoji}</div>
              <p className="text-sm font-rajdhani font-semibold text-mist-text">{sticker.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
