import React, { ReactElement, useState } from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import useStyles from './style';

type Props = {
  startGame: (cards: number) => void;
};

const Game = ({ startGame }: Props): ReactElement => {
  const styles = useStyles();
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [error, setError] = useState(false);
  return (
    <Grid container className={styles.root}>
      <Grid container className="game-container">
        <Grid item xs={12} className="game-name-heading">
          <Typography component="p">Memory Game</Typography>
        </Grid>
        <Grid item xs={12} className="game-box-input">
          <TextField
            type="number"
            value={numberOfCards}
            onChange={(e) => {
              if (
                parseInt(e.target.value) === 0 ||
                parseInt(e.target.value) > 30 ||
                parseInt(e.target.value) % 2 !== 0 ||
                parseInt(e.target.value) < 0
              ) {
                setError(true);
              } else {
                setError(false);
              }
              if (e.target.value === '') {
                setNumberOfCards(0);
              } else setNumberOfCards(parseInt(e.target.value));
            }}
            variant="outlined"
            error={error}
            id="outlined-error-helper-text"
            helperText={error ? "Incorrect number" : ""}
            classes={{
              root: "text-input",
            }}
            InputProps={{
              classes: {
                error: "text-input-error",
              },
            }}
            label="Number of cards"
          />
        </Grid>
        <Grid item xs={12} className="game-box-button">
          <Button
            disabled={error || numberOfCards === 0}
            classes={{
              root: "play-btn-root",
              disabled: "play-btn-disabled",
            }}
            onClick={() => {
              if (numberOfCards === 0 || numberOfCards > 30 || numberOfCards < 0) {
                return;
              } else {
                startGame(numberOfCards);
              }
            }}
          >
            Let's Begin
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Game;
