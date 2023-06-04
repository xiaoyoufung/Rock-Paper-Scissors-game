/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        "primary": {
          SG1: 'hsl(39, 89%, 49%);',
          SG2: 'hsl(40, 84%, 53%);',
          PG1:'hsl(230, 89%, 62%);',
          PG2:'hsl(230, 89%, 65%);',
          RG1: 'hsl(349, 71%, 52%);',
          RG2: 'hsl(349, 70%, 56%);',
          LG1: 'hsl(261, 73%, 60%);',
          LG2: 'hsl(261, 72%, 63%);',
          cyan1: 'hsl(189, 59%, 53%);',
          cyan2: 'hsl(189, 58%, 57%);'
        },
        "neutral": {
          DT: "hsl(229, 25%, 31%);",
          ST: "hsl(229, 64%, 46%);",
          HO: "hsl(217, 16%, 45%);"
        },
        "bg": {
          BG1: "hsl(214, 47%, 23%);",
          BG2: "hsl(237, 49%, 15%);"
        }
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '25': '100px',
        '128': '36rem',
        '248': '48rem'
      }
    },
  },
  plugins: [],
}

