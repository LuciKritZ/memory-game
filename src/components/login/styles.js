import { makeStyles } from '@material-ui/core';
import { themeColors } from '../common/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: themeColors.pink,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    '& .login-box': {
      backgroundColor: themeColors.blue,
      height: '70vh',
      maxHeight: '600px',
      maxWidth: '400px',
      width: '35vw',
      borderRadius: '15px',
      color: 'white',
      '@media (max-width: 600px)' : {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100vh',
        borderRadius: '0px',
      },
      '& .login-box-heading': {
        height: '35%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: themeColors.green,
        borderRadius: '15px 15px 100% 0px',
        paddingLeft: '30px',
        '& p': {
          fontSize: '20px',
        },
        '@media (max-width: 600px)' : {
          borderRadius: '0px 0px 100% 0px',
        },
      },
      '& .login-box-input': {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: 'white',
        '& .text-input': {
          height: '20%',
          color: 'white',
        },
        '& .text-input-error': {
          borderColor: themeColors.red,
        },
      },
      '& .login-box-submit': {
        height: '35%',
        maxHeight: '240px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: themeColors.yellow,
        borderRadius: '100% 0px 15px 15px',
        padding: '0px 25px 25px 0px',
        '@media (max-width: 600px)' : {
          borderRadius: '100% 0px 0px 0px',
          maxHeight: 'max-content',
        },
        '& .play-btn-root': {
          textAlign: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '20px',
          textTransform: 'capitalize',
        },
        '& .play-btn-disabled': {
          color: 'gray',
        }
      }
    },
  }
});

export default useStyles;
