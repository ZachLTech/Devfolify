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
    extend: {
      animation: {
        'border-trace': 'border-trace 2s linear infinite',
      },
      keyframes: {
        'border-trace': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
    },
    colors: {
      "primary": "#1e18ee",
      "primary-dark": "#1911e8",
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
          "primary": "#1e18ee",
          "primary-dark": "#1911e8",
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
