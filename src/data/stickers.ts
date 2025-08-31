
export interface StickerData {
  id: string;
  name: string;
  caption: string;
  emoji: string; // Temporary placeholder until GitHub stickers are added
  // Add these properties when you have the actual sticker files:
  // imageUrl?: string;
  // fileName?: string;
}

export const stickerData: StickerData[] = [
  {
    id: "master",
    name: "The Master",
    caption: "Silent and deadly",
    emoji: "🥷"
  },
  {
    id: "twin-blades", 
    name: "Twin Blades",
    caption: "Swift strikes",
    emoji: "⚔️"
  },
  {
    id: "whirlwind",
    name: "Whirlwind", 
    caption: "Speed incarnate",
    emoji: "🌪️"
  },
  {
    id: "vanish",
    name: "Vanish",
    caption: "Here one moment, gone the next", 
    emoji: "💨"
  },
  {
    id: "fire-strike",
    name: "Fire Strike",
    caption: "Burning passion",
    emoji: "🔥"
  },
  {
    id: "shuriken-master", 
    name: "Shuriken Master",
    caption: "Precision perfected",
    emoji: "⭐"
  }
];

// Instructions for adding GitHub stickers:
// 1. Upload your sticker images to a folder like `public/stickers/` or `src/assets/stickers/`
// 2. Update each sticker object to include:
//    - imageUrl: "/stickers/filename.png" (if using public folder)
//    - fileName: "filename.png" 
// 3. Replace the emoji property with actual image rendering in components
// 4. Example usage: <img src={sticker.imageUrl} alt={sticker.name} />
