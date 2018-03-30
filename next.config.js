const path = require("path");

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    config.resolve = {
      alias: {
        "styled-components": path.resolve(
          __dirname,
          "node_modules",
          "styled-components"
        )
      }
    };
    // Important: return the modified config
    return config;
  }
};
