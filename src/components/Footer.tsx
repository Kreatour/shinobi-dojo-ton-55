
export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-dojo-void to-dojo-shadow">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-orbitron font-bold mb-6">
            <span className="text-glow-blue">$SHINOBI</span> is more than a coin.
          </div>
          
          <p className="text-xl font-rajdhani font-medium text-mist-text mb-8 max-w-3xl mx-auto leading-relaxed">
            It's a ninja revolution, a sticker narrative, and a community-driven legend on TON.
          </p>
          
          <div className="text-2xl font-orbitron font-bold">
            <span className="text-glow-red">⚔️ Join the dojo.</span>{" "}
            <span className="text-glow-blue">Wield the memes.</span>{" "}
            <span className="text-glow-purple">Master the stealth.</span>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dojo-steel text-shadow-text font-rajdhani">
            © 2025 Shinobi Token. Built by the community, for the community.
          </div>
        </div>
      </div>
    </footer>
  );
};
