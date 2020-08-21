/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        palette: {
          'dark':'#222831',
          'light':'#ffffff',
          'darkblue':'#2d4059',
          'lightwhite':'#ececec',
        }
      },
      placeholderColor: {
        palette: {
          'dark':'#222831',
          'light':'#ffffff',
          'darkblue':'#2d4059',
          'lightwhite':'#ececec',
        }
      },
      boxShadow: {
        '3xl': '5px 20px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'mobile':'0.7rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    fontFamily: {
      'title':['Oswald']
    },
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode"
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
    placeholderColor: ['dark', 'dark-placeholder'],
    textOpacity: ['dark'],
  },
  plugins: [
    require("tailwindcss-dark-mode")()
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
