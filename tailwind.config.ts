import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

const config: Config = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			keyframes: {
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" }
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				slideInLeft: {
					"0%": { opacity: "0", transform: "translateX(-40px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},
				popIn: {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				}
			},
			animation: {
				"waving-hand": "wave 2s linear infinite",
				"fade-in": "fadeIn 0.7s ease",
				"slide-in-left": "slideInLeft 0.7s cubic-bezier(.4,0,.2,1) both",
				"pop-in": "popIn 0.5s cubic-bezier(.4,0,.2,1) both"
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				"clash-display": "var(--font-clash-display)",
				satoshi: "var(--font-satoshi)",
				mono: ['"JetBrains Mono"', "monospace"]
			},
			screens: {
				xs: "440px"
			},
			boxShadow: {
				"yellow-highlight": "0 0 0 0.5rem #fde047"
			}
		}
	},
	plugins: [tailwindcssAnimate, tailwindcssTypography]
};

export default config;
