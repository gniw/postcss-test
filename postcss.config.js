module.exports = {
  plugins: [
    require("cssnano")({
      preset: [
        "default",
        {
          // mergeLonghand: false,
        },
      ],
    }),
  ],
};
