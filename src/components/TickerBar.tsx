
import { ExternalLink } from "lucide-react";

export const TickerBar = () => {
  return (
    <div className="bg-gradient-to-r from-katana-blue to-royal-purple py-2 px-4">
      <div className="flex items-center justify-center gap-4 text-sm font-orbitron font-bold">
        <span className="text-ninja-text">$SHINOBI</span>
        <span className="text-dojo-void">•</span>
        <span className="text-ninja-text">Live on TON</span>
        <span className="text-dojo-void">•</span>
        <span className="text-ninja-text">DexScreener: Coming at 25k MC</span>
      </div>
    </div>
  );
};
