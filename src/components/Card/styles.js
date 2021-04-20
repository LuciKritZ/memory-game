import { makeStyles } from '@material-ui/core';
import { themeColors } from '../common/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: themeColors.purple,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default useStyles;
