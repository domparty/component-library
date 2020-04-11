import { create } from '@storybook/theming';

const light = '#FFFFFF';
const primary = 'black';
const secondary = '#C295D8';

export default create({
  base: 'light',

  colorPrimary: primary,
  colorSecondary: secondary,

  // UI
  appBg: '#000000',
  appContentBg: light,
  appBorderColor: light,
  appBorderRadius: 0,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#343434',

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  // Toolbar default and active colors
  barTextColor: primary,
  barSelectedColor: secondary,
  barBg: '#f5f7fa',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: '@domparty/fe',
  brandUrl: 'https://github.com/domparty/component-library',
  brandImage: 'https://avatars1.githubusercontent.com/u/61700544?s=200&v=4',
});