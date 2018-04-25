// next.config.js
const path=require('path');
var rootPath=path.join(__dirname,'./');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  /* 自定义构建目录, 默认为.next */
  distDir: '.build',
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            {
              loader:'postcss-loader',
              options: {
                sourceMap:true,
                config: {
                  path: path.resolve(rootPath, "postcss.config.js")  // 这个得在项目根目录创建此文件
                }
              }
            },
          ]
        })
      },
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        include: path.resolve(rootPath, "assets"),
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader: 'css-loader',
            options: {
              sourceMap:true,
              modules: true,
              camelCase: true
            }
          },
            {
              loader:'postcss-loader',
              options: {
                // plugins:()=>[require("autoprefixer")({browsers:'last 5 versions'})],
                sourceMap:true,
                config: {
                  path: path.resolve(rootPath, "postcss.config.js")  // 这个得在项目根目录创建此文件
                }
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true,
              }
            }]
        }),
      },
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        include:path.resolve(rootPath, "src"),
        use:{
          loader:'babel-loader',
          options:{
            presets: ['env', 'react', 'stage-0'],
            plugins: [
              'transform-runtime',
              'add-module-exports',
              ["import", { libraryName: "antd-mobile", style: "css" }]
            ],
            cacheDirectory: true,
          }
        }
      },
    );
    config.plugins.push(new ExtractTextPlugin({filename: 'static/style.css'}))
    return config;
  },
}
