module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#00FFFF", // electric-blue
          50: "#E6FFFF", // electric-blue-50
          100: "#CCFFFF", // electric-blue-100
          200: "#99FFFF", // electric-blue-200
          300: "#66FFFF", // electric-blue-300
          400: "#33FFFF", // electric-blue-400
          500: "#00FFFF", // electric-blue-500
          600: "#00CCCC", // electric-blue-600
          700: "#009999", // electric-blue-700
          800: "#006666", // electric-blue-800
          900: "#003333", // electric-blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#8A2BE2", // neon-purple
          50: "#F3E8FF", // neon-purple-50
          100: "#E9D5FF", // neon-purple-100
          200: "#D6BBFB", // neon-purple-200
          300: "#C084FC", // neon-purple-300
          400: "#A855F7", // neon-purple-400
          500: "#8A2BE2", // neon-purple-500
          600: "#7C3AED", // neon-purple-600
          700: "#6D28D9", // neon-purple-700
          800: "#5B21B6", // neon-purple-800
          900: "#4C1D95", // neon-purple-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#FF1493", // hot-pink
          50: "#FFF0F8", // hot-pink-50
          100: "#FFE4F1", // hot-pink-100
          200: "#FFCCE5", // hot-pink-200
          300: "#FF99D1", // hot-pink-300
          400: "#FF66BD", // hot-pink-400
          500: "#FF1493", // hot-pink-500
          600: "#E6127F", // hot-pink-600
          700: "#CC106B", // hot-pink-700
          800: "#B30E57", // hot-pink-800
          900: "#990C43", // hot-pink-900
        },
        // Background Colors
        background: "#0A0A0A", // deep-space
        surface: {
          DEFAULT: "#1A1A2E", // surface-dark
          light: "#2A2A3E", // surface-light
        },
        // Text Colors
        text: {
          primary: "#FFFFFF", // white
          secondary: "#C0C0C0", // chrome-silver
          muted: "#808080", // muted-silver
        },
        // Status Colors
        success: {
          DEFAULT: "#00FF88", // bright-green
          50: "#E6FFF4", // bright-green-50
          100: "#CCFFE9", // bright-green-100
          200: "#99FFD3", // bright-green-200
          300: "#66FFBD", // bright-green-300
          400: "#33FFA7", // bright-green-400
          500: "#00FF88", // bright-green-500
          600: "#00E677", // bright-green-600
          700: "#00CC66", // bright-green-700
          800: "#00B355", // bright-green-800
          900: "#009944", // bright-green-900
        },
        warning: {
          DEFAULT: "#FFA500", // amber
          50: "#FFF8E6", // amber-50
          100: "#FFF1CC", // amber-100
          200: "#FFE399", // amber-200
          300: "#FFD566", // amber-300
          400: "#FFC733", // amber-400
          500: "#FFA500", // amber-500
          600: "#E69400", // amber-600
          700: "#CC8300", // amber-700
          800: "#B37200", // amber-800
          900: "#996100", // amber-900
        },
        error: {
          DEFAULT: "#FF4444", // soft-red
          50: "#FFEBEB", // soft-red-50
          100: "#FFD7D7", // soft-red-100
          200: "#FFAFAF", // soft-red-200
          300: "#FF8787", // soft-red-300
          400: "#FF5F5F", // soft-red-400
          500: "#FF4444", // soft-red-500
          600: "#E63D3D", // soft-red-600
          700: "#CC3636", // soft-red-700
          800: "#B32F2F", // soft-red-800
          900: "#992828", // soft-red-900
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Headlines
        inter: ['Inter', 'sans-serif'], // Body text
        exo: ['Exo 2', 'sans-serif'], // CTAs
        mono: ['JetBrains Mono', 'monospace'], // Accents/Code
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow-primary': '0 4px 20px rgba(0, 255, 255, 0.15)',
        'glow-secondary': '0 4px 20px rgba(138, 43, 226, 0.15)',
        'glow-accent': '0 4px 20px rgba(255, 20, 147, 0.15)',
        'glow-success': '0 4px 20px rgba(0, 255, 136, 0.15)',
        'cyber-depth': '0 8px 32px rgba(0, 0, 0, 0.3)',
        '3d-float': '0 12px 40px rgba(0, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '200': '200ms', // micro-feedback
        '300': '300ms', // smooth interactions
        '400': '400ms', // spatial navigation
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      backdropBlur: {
        'cyber': '12px',
      },
      borderRadius: {
        'cyber': '0.5rem',
        'cyber-lg': '1rem',
      },
    },
  },
  plugins: [],
}