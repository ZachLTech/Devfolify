/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#3b3bc4",
      "primary-dark": "#3b3bc4",
      "secondary": "#9595db",
      "secondary-dark": "#24246a",
      "accent": "#5353f3",
      "accent-dark": "#0c0cac",
      "neutral": "#000",
      "text": "#090911",
      "text-dark": "#eeeef6",
      "bg": "#fbfbfe",
      "bg-dark": "#010104"
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b3bc4",
          "primary-dark": "#3b3bc4",
          "secondary": "#9595db",
          "secondary-dark": "#24246a",
          "accent": "#5353f3",
          "accent-dark": "#0c0cac",
          "neutral": "#000",
          "text": "#090911",
          "text-dark": "#eeeef6",
          "bg": "#fbfbfe",
          "bg-dark": "#010104"
        },
      }
    ],
  },
}
