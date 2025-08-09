module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*", "!./dist/**/*"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep ocean calm, trust and sophistication
        primary: {
          DEFAULT: "#2C5F5D", // teal-700
          50: "#F0F7F7", // teal-50
          100: "#D6EBEA", // teal-100
          200: "#B8DCDA", // teal-200
          300: "#8FC5C1", // teal-300
          400: "#5A9B96", // teal-400
          500: "#2C5F5D", // teal-500
          600: "#245450", // teal-600
          700: "#1D4843", // teal-700
          800: "#163C37", // teal-800
          900: "#0F302B", // teal-900
        },
        
        // Secondary Colors - Warm earth luxury, natural elegance foundation
        secondary: {
          DEFAULT: "#8B7355", // amber-700
          50: "#F7F5F1", // amber-50
          100: "#EDE8DF", // amber-100
          200: "#DDD4C5", // amber-200
          300: "#C4B59E", // amber-300
          400: "#A79477", // amber-400
          500: "#8B7355", // amber-500
          600: "#7A6248", // amber-600
          700: "#69523C", // amber-700
          800: "#584230", // amber-800
          900: "#473324", // amber-900
        },
        
        // Accent Colors - Golden hour warmth, highlighting special moments
        accent: {
          DEFAULT: "#D4A574", // orange-300
          50: "#FDF9F4", // orange-50
          100: "#F9F0E5", // orange-100
          200: "#F2E0C7", // orange-200
          300: "#E8C89E", // orange-300
          400: "#DEB689", // orange-400
          500: "#D4A574", // orange-500
          600: "#C19660", // orange-600
          700: "#A8824D", // orange-700
          800: "#8F6E3A", // orange-800
          900: "#765A27", // orange-900
        },
        
        // Background Colors
        background: "#FEFCF8", // warm-50 - Soft linen comfort, breathing room canvas
        surface: "#F7F5F1", // warm-100 - Subtle elevation, gentle content separation
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900 - Clear communication, effortless reading experience
          secondary: "#6B6B6B", // gray-500 - Supporting information, visual hierarchy clarity
        },
        
        // Status Colors
        success: {
          DEFAULT: "#7A9B76", // green-600
          50: "#F4F7F4", // green-50
          100: "#E6F0E5", // green-100
          200: "#D0E2CE", // green-200
          300: "#B0CEB0", // green-300
          400: "#95B593", // green-400
          500: "#7A9B76", // green-500
          600: "#6B8A67", // green-600
          700: "#5C7958", // green-700
          800: "#4D6849", // green-800
          900: "#3E573A", // green-900
        },
        
        warning: {
          DEFAULT: "#C4956C", // yellow-600
          50: "#FBF7F3", // yellow-50
          100: "#F5EDE3", // yellow-100
          200: "#EDD8C4", // yellow-200
          300: "#E0B89E", // yellow-300
          400: "#D2A685", // yellow-400
          500: "#C4956C", // yellow-500
          600: "#B0845E", // yellow-600
          700: "#9C7350", // yellow-700
          800: "#886242", // yellow-800
          900: "#745134", // yellow-900
        },
        
        error: {
          DEFAULT: "#A67C7C", // red-400
          50: "#F7F4F4", // red-50
          100: "#EDE6E6", // red-100
          200: "#DCC9C9", // red-200
          300: "#C6A3A3", // red-300
          400: "#B68F8F", // red-400
          500: "#A67C7C", // red-500
          600: "#956E6E", // red-600
          700: "#846060", // red-700
          800: "#735252", // red-800
          900: "#624444", // red-900
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Crimson Text', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      boxShadow: {
        'subtle': '0 4px 20px rgba(44, 95, 93, 0.08)',
        'soft': '0 2px 12px rgba(44, 95, 93, 0.06)',
        'gentle': '0 1px 8px rgba(44, 95, 93, 0.04)',
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 600ms ease-out',
        'gentle-bounce': 'gentleBounce 800ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '60%': { opacity: '1', transform: 'translateY(-5px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}