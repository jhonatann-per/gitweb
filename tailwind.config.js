module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px',
        '6xl': '128px',
      },
      colors: {
        white: {
          DEFAULT: '#FAFAFA',
        },
        black: {
          DEFAULT: '#3D3D3D',
        },
        blue: {
          100: '#EDF3F7'
        },
        gray: {
          DEFAULT: '#989AA0',
        }
      }
    },
  },
  plugins: [],
}
