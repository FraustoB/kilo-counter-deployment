module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "200px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
