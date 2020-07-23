// import the path module to the webpack.config.js
const path = require("path");
// import jQuery plugin
const webpack = require("webpack");
// import the webpack-bundle-analyzer module, if report is needed
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");

console.log(path.join(__dirname, './public'));

module.exports = { 
    entry: './public/js/index.js', 
    output: {
        path: path.resolve(__dirname, './public/js')
        ,
        filename: 'index.bundle.js'
      },
      mode: 'development',
      plugins: [
      //   new webpack.ProvidePlugin({
      //     $: "jquery",
      //     jQuery: "jquery"
      //   }),
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: "static", // the report outputs to an HTML file in the public folder
      //   })
      // ], 
    new WebpackPwaManifest({
      name: "Budget Tracker",
      short_name: "budget",
      description: "Track your finances.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [{
        src: path.resolve("/icons/icon-512x512.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("icons")
      }]
    })
  ], 
};