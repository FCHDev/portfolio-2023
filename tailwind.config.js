/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {

        fontFamily: {
            headerTitle: ['Oswald', 'sans-serif'],
            bodyFont: ['Anybody', 'sans-serif'],
            bodyFont2: ['Raleway', 'sans-serif'],
        },
        extend: {
            keyframes: {
                appear: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '100'},
                }
            },
            animation: {
                appear: 'appear 1s ease-in',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'jaune': '#FFCB47',
                'jaune-dark': '#FFBA0A',
                'bleu-vert': '#264653',
                'clair': '#60D2C1',
                'rose-rouge': '#F25F5C',
                'chocolat': '#4C061D',
                'celadon': '#B9D8C2',
                'ebony': '#4A5043',
                'silver-lake': '#6C91C2',
                'anti-flash': '#E9E8ED',
                'gris': '#EBEBEB',
                'gris-clair': '#F5F5F5',
                'white': '#FFFFFF',
                'black': '#000000',
                'cadet': '#8AA1B1'
            },
        },
    },
    plugins: [],
    safelist: [{
        pattern: /(bg|text|border)-(jaune|jaune-dark|bleu-vert|clair|rose-rouge|chocolat|celadon|ebony|silver-lake|anti-flash|gris|gris-clair|white|black|cadet)/
    }

    ]
}
