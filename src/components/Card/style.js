import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    card: {
        width: '15% !important',
        userSelect: 'none !important',
        height: '110px !important',
        padding: '10px !important',
        boxSizing: 'border-box !important',
        textAlign: 'center !important',
        marginBottom: '15px !important',
        transition: '0.6s !important',
        transformStyle: 'preserve-3d !important',
        position: 'relative !important',
    },
    cardContent: {
        backfaceVisibility: 'hidden !important',
        position: 'absolute !important',
        top: '0 !important',
        left: '0 !important',
        width: '100% !important',
        height: '100% !important',
        borderRadius: '10px !important',
        transition: '0.6s !important',
        background: '#f4f5f7 !important',
        '& .front': {
            fontSize: '50px',
            lineHeight: '120px',
            cursor: 'pointer',
            color: 'darken(#f4f5f7, 20%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& .back': {
            transform: 'rotateY(180deg) !important',
            lineHeight: '110px !important',
            '& img': {
                verticalAlign: 'middle',
                width: '70%',
            },
        },
    },
    opened: {
        transform: 'rotateY(180deg)',
    },
    matched: {
        transform: 'rotateY(180deg)',
        '& .back': {
            boxShadow: '0 0 0 2px rgba(#000,.05) inset',
            animation: 'selected .8s 0s ease 1',
            'animation-fill-mode': 'both',
            opacity: 0.2,
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
    },
});

// .front {
//     font-size: 50px !important;
//     line-height: 120px !important;
//     cursor: pointer !important;
//     /* color: darken(#f4f5f7, 20%); */
//     display: flex !important;
//     align-items: center !important;
//     justify-content: center !important;
//     /* //background: -webkit-linear-gradient(to top, #FFFFFF, #ECE9E6);
//     //background: linear-gradient(to top, #FFFFFF, #ECE9E6); */
// }
