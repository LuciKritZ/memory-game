import React, { ReactElement } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import clsx from 'clsx';
import './style.css';

type AppProps = {
    image: string;
    handleClick: (image: string) => void;
    close: boolean;
    complete: boolean;
};

const GameCard = ({ image, handleClick, complete, close }: AppProps): ReactElement => {
    return (
        <Card
            className={clsx('card', !close ? 'opened' : '', complete ? 'matched' : '')}
            onClick={() => handleClick(image)}
        >
            <CardContent>
                <Grid container justify="center" alignItems="center" className="card-content">
                    <Grid item xs={12} className="front">
                        ?
                    </Grid>
                    <Grid item xs={12} className={clsx('back', complete ? 'match-back' : '')}>
                        <img
                            className="back-image"
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
