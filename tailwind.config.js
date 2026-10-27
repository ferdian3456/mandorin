/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#E4572E',
        'primary-dark': '#C4431F',
        'foreground': '#1C1917',
        'muted': '#78716C',
        'subtle': '#A8A29E',
        'on-dark': '#D6D3D1',
        'outline': '#E7E5E4',
        'field': '#F5F5F4'
      }
    },
  },
  plugins: [],
}
