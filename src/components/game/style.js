import { makeStyles } from '@material-ui/core';
import { themeColors } from '../common/styles';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    background: 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
    '& .game-container': {
      backgroundColor: themeColors.yellow,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '75vh',
      width: '60vw',
      maxWidth: '600px',
      maxHeight: '600px',
      borderRadius: '15px',
      '& .game-name-heading': {
        backgroundColor: themeColors.green,
        height: '15%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '15px 15px 0px 75%',
        padding: '40px',
        '& p': {
          fontSize: 35,
          color: 'white',
        },
      },
      '& .game-box-input': {
        backgroundColor: themeColors.blue,
        height: '70%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50% 100%',
        '& .text-input': {
          height: '90px',
        },
        '& .text-input-error': {
          borderColor: themeColors.red,
        },
      },
      '& .game-box-button': {
        height: '15%',
        alignItems: 'flex-end',
        display: 'flex',
        backgroundColor: themeColors.red,
        borderRadius: '0px 75% 15px 15px',
        paddingBottom: '15px',
        '& .play-btn-root': {
          color: 'white',
          fontSize: 20,
          margin: '0px 20px',
        },
        '& .play-btn-disabled': {
          opacity: 0.5,
        },
      },
    },
  },
});

export default useStyles;
