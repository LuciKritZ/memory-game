import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        /* background: "linear-gradient(#4286f4, #373B44)" */
        backgroundColor: '#f2f2f2',
        minHeight: '100vh',
        display: 'flex',
        /* flexDirection: "column", */
        /* alignItems: "center", */
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        '& .toolbar': {
            backgroundColor: '#2b6777',
            height: '7vh',
            '& .toolbar-link': {
                color: '#fff',
                textDecoration: 'none',
                '& .toolbar-heading': {
                    color: '#fff',
                },
            },
        },
        '& .options-container': {
            display: 'flex',
            marginTop: '64px',
            '& .options-heading-container': {
                color: '#2b6777',
                padding: '15px 0px',
            },
            '& .text-field-container': {
                height: '72vh',
                background: '#598ca1',
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)',
                transition: '0.3s',
                '& .input-grid-container': {
                    height: '67vh',
                    '& .text-field': {
                        width: '70%',
                        '& input': {
                            marginTop: '6vh',
                            fontSize: '50px',
                            textAlign: 'center',
                        },
                    },
                    '& .input-container': {
                        fontSize: '50px',
                        color: '#2b6777 !important',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    },
                },
            },
            '& .error-grid-container': {
                height: '5vh',
                '& .input-container-error': {
                    color: '#f44336 !important',
                    fontSize: '25px',
                },
            },
            '& .button-container': {
                height: '20vh !important',
                alignItems: 'flex-end',
                '& .arrow-icon': {
                    color: '#2b6777',
                    fontSize: '100px',
                },
                '& .play-button': {
                    backgroundColor: 'transparent !important',
                    color: 'white !important',
                },
                '& .play-button-disabled': {
                    opacity: 0.5,
                },
            },
        },
        '& .game-container': {
            display: 'flex',
            margin: '10%',
            flexWrap: 'wrap !important',
            justifyContent: 'space-between !important',
            perspective: '1000px',
            marginTop: 'calc(2% + 64px)',
        },
    },
});
