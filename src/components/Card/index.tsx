import React, { ReactElement } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { AppProps } from '../utils/types';
import clsx from 'clsx';
import { useStyles } from './style.js';

const GameCard = ({ image, handleClick, complete, close }: AppProps): ReactElement => {
    const styles = useStyles();
    return (
        <Card
            className={clsx(styles.card, !close ? styles.opened : '', complete ? styles.matched : '')}
            onClick={() => handleClick(image)}
        >
            <CardContent>
                <Grid container justify="center" alignItems="center" className={styles.cardContent}>
                    <Grid item xs={12} className="front">
                        ?
                    </Grid>
                    <Grid item xs={12} className="back">
                        <img
                            src={
                                'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/' +
                                image +
                                '.png'
                            }
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default GameCard;
