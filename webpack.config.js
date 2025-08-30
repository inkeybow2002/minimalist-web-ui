const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',
  output: {
    // Output filename and path configuration
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // Library settings for UMD compatibility
    library: 'MinimalistWebUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        // Transpile JavaScript files except those in node_modules
        test: /\.js$/,
        exclude: /node_modules/, 
        use: 'babel-loader'
      }
    ]
  },
  // Set mode to development for better debugging
  mode: 'development'
};