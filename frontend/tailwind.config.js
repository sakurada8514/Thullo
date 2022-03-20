module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  options: {
    whitelist: ['max-w-lg', 'max-w-xl']
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D5E6FB",
          DEFAULT: "#2E80ED",
          dark: "#276bc4",
        },
        secondary: {
          light: "#D3EADD",
          DEFAULT: "#2ad672",
          dark: "#219653",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
