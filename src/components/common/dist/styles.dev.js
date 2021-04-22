"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeColors = exports.loaderStyles = void 0;

var _core = require("@material-ui/core");

var themeColors = {
  red: '#ea4335',
  blue: '#4285f4',
  yellow: '#fbbc05',
  green: '#34a853',
  purple: '#b60b5f',
  grey: '#BDBDBD',
  pink: '#880e4f'
};
exports.themeColors = themeColors;
var loaderStyles = (0, _core.makeStyles)({
  loaderContainerFull: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: themeColors.grey
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '110px',
    width: 'auto'
  },
  colorPrimary: {
    color: themeColors.blue,
    animation: '$changeColors 1s infinite'
  },
  colorDefault: {
    color: themeColors.pink
  },
  '@keyframes changeColors': {
    '0%': {
      color: themeColors.red
    },
    '25%': {
      color: themeColors.yellow
    },
    '50%': {
      color: themeColors.green
    },
    '75%': {
      color: themeColors.purple
    },
    '100%': {
      color: themeColors.red
    }
  }
});
exports.loaderStyles = loaderStyles;