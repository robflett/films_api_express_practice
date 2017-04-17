var config = {
  entry: "./client/src/app.js",
  output: {
    filename: "bundle.js",
    path: "./client/build"
  },
  // the below will keep the files seperate so that you can find errors by line
  devtool: "source-map"
}

module.exports = config;