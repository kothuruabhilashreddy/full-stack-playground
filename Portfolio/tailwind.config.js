module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // adjust to your project folder structure
    ],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
        extend: {
            keyframes: {
                roll: {
                  '0%': { transform: 'rotateX(45deg) rotateY(-45deg)'},
                  '25%': { transform: 'rotateX(-45deg) rotateY(-45deg)'},
                  '50%': { transform: 'rotateX(45deg) rotateY(45deg)'},
                  '75%': { transform: 'rotateX(-45deg) rotateY(45deg)'},
                  '100%': { transform: 'rotateX(45deg) rotateY(-45deg)'}
                }
            },
            animation: {
                roll: 'roll 10s infinite',
              }
        },
    },
    plugins: [],
  }
  