const replacer = (_, ...rest) => `../${rest[0]}/${rest[1]}`;

module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "11"
        }
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-react-jsx"]
};
