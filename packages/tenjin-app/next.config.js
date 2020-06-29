const withTranspiledModules = require("next-transpile-modules")([
  "@mindfulstudio",
]);

module.exports = withTranspiledModules({
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.resolve.alias["@mindfulstudio/tenjin-ui"] =
        "@mindfulstudio/tenjin-ui/src";
      config.resolve.alias["@mindfulstudio/tenjin-types"] =
        "@mindfulstudio/tenjin-types/types";
    }
    return config;
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
