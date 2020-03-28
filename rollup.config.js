import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import multiInput from "rollup-plugin-multi-input";
import pkg from "./package.json";

const extensions = [".ts", ".tsx"];

const name = "RollupTypeScriptBabel";

export default {
  input: ["./src/components/**/*.tsx"],

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ["react"],

  plugins: [
    multiInput(),

    // Compile TypeScript/JavaScript files
    babel({ extensions })
  ],

  output: {
    format: "cjs",
    dir: "lib"
  }
};
