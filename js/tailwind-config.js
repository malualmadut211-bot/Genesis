tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#6A4CFF",
                "secondary": "#00D4FF",
                "midnight": "#070B1A",
                "interface": "#0F1633",
                "background-light": "#f8f6f6",
                "background-dark": "#070B1A",
                "royal": "#6A4CFF",
                "electric": "#00D4FF",
                "aurora-purple": "#6366f1",
                "aurora-blue": "#0ea5e9",
                "aurora-teal": "#2dd4bf"
            },
            fontFamily: {
                "display": ["Public Sans", "sans-serif"],
                "sans": ["Public Sans", "sans-serif"]
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-spin': 'glow-spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-spin': {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '50%': { transform: 'rotate(180deg) scale(1.1)' },
                    '100%': { transform: 'rotate(360deg) scale(1)' },
                }
            }
        },
    },
}
