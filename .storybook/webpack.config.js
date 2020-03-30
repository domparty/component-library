const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};