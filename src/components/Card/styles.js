import { makeStyles } from '@material-ui/core';
import { themeColors } from '../common/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    height: 'auto',
    width: '100vw',
    backgroundColor: themeColors.green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .playground-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'inherit',
      width: '100%',
    },
    '& .unclickable': {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.8',
    }
  },
});

export default useStyles;
