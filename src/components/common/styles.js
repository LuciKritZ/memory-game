import { makeStyles } from '@material-ui/core';

const themeColors = {
  red: '#ea4335',
  blue: '#4285f4',
  yellow: '#fbbc05',
  green: '#34a853',
  purple: '#b60b5f',
  grey: '#BDBDBD',
  pink: '#880e4f',
};

const loaderStyles = makeStyles({
  loaderContainerFull: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: themeColors.grey,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
  },
  colorPrimary: {
    color: themeColors.blue,
    animation: '$changeColors 1s infinite',
  },
  '@keyframes changeColors': {
    '0%': {
      color: themeColors.red,
    },
    '25%': {
      color: themeColors.yellow,
    },
    '50%': {
      color: themeColors.green,
    },
    '75%': {
      color: themeColors.purple,
    },
    '100%': {
      color: themeColors.red,
    },
  },
});

export {
  loaderStyles,
  themeColors,
};
