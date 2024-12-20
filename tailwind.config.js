/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  //  daisyui: {
  //     themes: [
  //       {
  //         mytheme: {

  // "primary": "#ff0084",

  // "secondary": "#009a00",

  // "accent": "#007200",

  // "neutral": "#020602",

  // "base-100": "#f1ffff",

  // "info": "#008ee9",

  // "success": "#00fbbf",

  // "warning": "#f3ba00",

  // "error": "#c71e4d",
  //           },
  //         },
  //       ],
  //     },


  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#16a34a",

          "secondary": "#ff00ff",

          "accent": "#93c5fd",
          "m_black": "#222934",

          "neutral": "#e5e7eb",

          "base-100": "#ffffff",

          "info": "#a5b4fc",

          "success": "#00ff00",

          "warning": "#fde68a",

          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),

  ],
}

