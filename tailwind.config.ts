
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Ninja Dojo Palette
				'dojo-void': 'hsl(var(--dojo-void))',
				'dojo-shadow': 'hsl(var(--dojo-shadow))',
				'dojo-steel': 'hsl(var(--dojo-steel))',
				'dojo-mist': 'hsl(var(--dojo-mist))',
				
				'katana-blue': 'hsl(var(--katana-blue))',
				'katana-cyan': 'hsl(var(--katana-cyan))',
				'blood-red': 'hsl(var(--blood-red))',
				'crimson-glow': 'hsl(var(--crimson-glow))',
				'royal-purple': 'hsl(var(--royal-purple))',
				'mystic-violet': 'hsl(var(--mystic-violet))',
				
				'ninja-text': 'hsl(var(--ninja-text))',
				'mist-text': 'hsl(var(--mist-text))',
				'shadow-text': 'hsl(var(--shadow-text))',
				
				// Base tokens
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
			keyframes: {
				'shuriken-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'ninja-fade': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				},
				'katana-slash': {
					'0%': { transform: 'translateX(-100%) rotate(-45deg)', opacity: '0' },
					'50%': { transform: 'translateX(0%) rotate(-45deg)', opacity: '1' },
					'100%': { transform: 'translateX(100%) rotate(-45deg)', opacity: '0' }
				},
				'smoke-rise': {
					'0%': { transform: 'translateY(0px) scale(1)', opacity: '0.8' },
					'100%': { transform: 'translateY(-50px) scale(1.5)', opacity: '0' }
				}
			},
			animation: {
				'shuriken-spin': 'shuriken-spin 3s linear infinite',
				'ninja-fade': 'ninja-fade 2s ease-in-out infinite',
				'katana-slash': 'katana-slash 1s ease-in-out',
				'smoke-rise': 'smoke-rise 2s ease-out infinite',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
