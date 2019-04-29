const withTypeScript = require("@zeit/next-typescript");
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypeScript({
    target: "serverless",
    webpack(config, options) {
        if(options.isServer) config.plugins.push(new forkTsCheckerWebpackPlugin());
        return config;
    }
});
