const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  experiments: {
    outputModule: true, //如果以es module的形式导出，则需要配置experiments.outputModule项
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js", //打包后的文件名
    library: {
      // name: "littleLib",
      type: "module",
    },
  },
};
