// postcss.config.js
module.exports = ({ env }) => ({
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
});
