const path = require('path');

// @see https://webpack.js.org/api/plugins/
class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap('ConsoleLogOnBuildWebpackPlugin', compilation => {
      console.log('The webpack build process is starting!!!');
    })
    compiler.hooks.done.tap('done hook', compilation => {
        console.log('Done!')
    })
    compiler.hooks.failed.tap('failed hook', compilation => {
        console.log('Are You Nuuuuuuuuuuts!!!!?????')
    })
  }
}


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin()
    ]
};
