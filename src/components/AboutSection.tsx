
export const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="dojo-card max-w-4xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-center mb-8">
            <span className="text-glow-purple">About Shinobi</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-rajdhani font-medium leading-relaxed">
            <p className="text-mist-text">
              Once just a sticker in Telegram's legendary pack, Shinobi was forgotten in the shadows… 
              until the community brought him back as a token of unity, fun, and power.
            </p>
            
            <p className="text-ninja-text">
              <span className="text-glow-blue font-bold">$SHINOBI</span> isn't just another coin. 
              It's a sticker narrative turned memecoin, weaving culture, memes, and ninja spirit 
              into one unstoppable movement on the TON blockchain.
            </p>
            
            <div className="text-center text-2xl font-orbitron font-bold">
              <span className="text-glow-red">🥷 From sticker…</span>{" "}
              <span className="text-glow-blue">to dojo…</span>{" "}
              <span className="text-glow-purple">to destiny.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
