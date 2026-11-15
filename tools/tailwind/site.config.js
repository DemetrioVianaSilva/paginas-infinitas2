module.exports = Object.assign({
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        blue: {50:'#f0fdf1',100:'#dcfce0',200:'#a7f3b5',300:'#4ade6a',400:'#22c545',500:'#16a336',600:'#15802e',700:'#166528',800:'#145324',900:'#0f3f1c',950:'#052e10'},
                        indigo: {50:'#f0fdf1',100:'#dcfce0',200:'#a7f3b5',300:'#4ade6a',400:'#22c545',500:'#16a336',600:'#15802e',700:'#166528',800:'#145324',900:'#0f3f1c',950:'#052e10'},
                        purple: {50:'#f7fee7',100:'#ecfccb',200:'#d9f99d',300:'#bef264',400:'#a3e635',500:'#65a30d',600:'#4d7c0f',700:'#3f6212',800:'#365314',900:'#2a400f',950:'#1a2e05'}
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.3s ease-in-out',
                        'slide-up': 'slideUp 0.3s ease-out',
                        'scale-in': 'scaleIn 0.2s ease-out'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        scaleIn: {
                            '0%': { transform: 'scale(0.95)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        }
                    }
                }
            }
        }, {
  content: ['./index.html'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
});
