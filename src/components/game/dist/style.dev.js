"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _styles = require("../common/styles");

var useStyles = (0, _core.makeStyles)({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    background: 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
    '& .user-name-heading': {
      color: 'white',
      fontSize: '20px',
      '& p': {
        fontSize: '5vh'
      }
    },
    '& .game-container': {
      backgroundColor: _styles.themeColors.yellow,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '75vh',
      width: '60vw',
      maxWidth: '600px',
      maxHeight: '600px',
      borderRadius: '15px',
      '@media (max-width: 600px)': {
        maxWidth: '360px',
        width: '85vw'
      },
      '& .game-name-heading': {
        backgroundColor: _styles.themeColors.green,
        height: '15%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '15px 15px 0px 75%',
        padding: '40px',
        '@media (max-width: 600px)': {
          padding: '20px'
        },
        '& p': {
          fontSize: 35,
          color: 'white',
          '@media (max-width: 600px)': {
            fontSize: 20
          }
        }
      },
      '& .game-box-input': {
        backgroundColor: _styles.themeColors.blue,
        height: '70%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50% 100%',
        '& .text-input': {
          height: '90px'
        },
        '& .text-input-error': {
          borderColor: _styles.themeColors.red
        }
      },
      '& .game-box-button': {
        height: '15%',
        alignItems: 'flex-end',
        display: 'flex',
        backgroundColor: _styles.themeColors.red,
        borderRadius: '0px 75% 15px 15px',
        paddingBottom: '15px',
        '@media (max-width: 600px)': {
          paddingBottom: '10px'
        },
        '& .play-btn-root': {
          color: 'white',
          fontSize: 20,
          margin: '0px 20px',
          '@media (max-width: 600px)': {
            fontSize: 17,
            margin: '0px 14px'
          }
        },
        '& .play-btn-disabled': {
          opacity: 0.5
        }
      }
    }
  }
});
var _default = useStyles;
exports["default"] = _default;