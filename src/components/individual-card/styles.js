import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '15%',
    userSelect: 'none',
    height: '110px',
    padding: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '15px',
    transition: '0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    '& .div-container': {
      backfaceVisibility: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      transition: '0.6s',
      background: '#f4f5f7',
    },
    '& .front': {
      fontSize: '50px',
      lineHeight: '120px',
      cursor: 'pointer',
      // color: 'darken(#f4f5f7,20%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //background: '-webkit-linear-gradient(to top, #FFFFFF, #ECE9E6)',
      //background: 'linear-gradient(to top, #FFFFFF, #ECE9E6)',
    },
    '& .back': {
      transform: 'rotateY(180deg)',
      lineHeight: '110px',
      '& img': {
        verticalAlign: 'middle',
        width: '70%',
      }
    },
    '& .opened': {
      transform: 'rotateY(180deg)',
    },
    '& .matched': {
      transform: 'rotateY(180deg)',
      '& .back': {
        boxShadow: '0 0 0 2px rgba(#000,.05) inset',
        animation: '$selected .8s 0s ease 1',
        'animation-fill-mode': 'both',
        opacity: 0.2,
      },
    },
  },
  '@keyframes selected': {
    '0%': {
      opacity: 0.2,
    },
    '30%': {
      opacity: 0.5,
    },
    '50%': {
      opacity: 0.9,
    },
    '70%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 0.3,
    },
  }
});

export default useStyles;
