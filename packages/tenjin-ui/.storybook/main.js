module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/preset-typescript"],
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets.push(
      require.resolve("@emotion/babel-preset-css-prop")
    );
    return config;
  },
};
