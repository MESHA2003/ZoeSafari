/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dss-primary': '#D4AF37',      // Gold - African sunset
                'dss-secondary': '#8B4513',     // Saddle Brown - Earth tones
                'dss-accent': '#E67E22',        // Orange - Warmth
                'dss-dark': '#1a1a2e',          // Dark blue - Night sky
                'dss-light': '#FFF8F0',         // Cream - Natural
                'dss-green': '#2D6A4F',         // Forest green
                'dss-savanna': '#C2A878',       // Savanna gold
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out',
                'fade-in': 'fadeIn 1s ease-in',
                'slide-in-left': 'slideInLeft 0.8s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'zoom-in': 'zoomIn 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
                'gold-gradient': "linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%)",
                'dark-gradient': "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            },
        },
    },
    plugins: [],
}