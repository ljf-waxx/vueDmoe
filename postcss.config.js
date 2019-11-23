module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem": {
      remUnit: 16
    },
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
