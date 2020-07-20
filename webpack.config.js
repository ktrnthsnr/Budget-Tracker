// import the path module to the webpack.config.js
const path = require("path");
// import jQuery plugin
const webpack = require("webpack");
// import the webpack-bundle-analyzer module, if report is needed
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

console.log(path.join(__dirname, './public'));

module.exports = { 
    entry: './public/js/index.js', 
    output: {
        path: path.resolve(__dirname, './public/js')
        ,
        filename: 'index.bundle.js'
      },
      mode: 'development',
    //   plugins: [
    //     new webpack.ProvidePlugin({
    //       $: "jquery",
    //       jQuery: "jquery"
    //     }),
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: "static", // the report outputs to an HTML file in the public folder
    //     })
    //   ], 
};