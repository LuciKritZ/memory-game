import React, { ReactElement, useState } from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

type Props = {
  onSubmit: () => void;
};

const Login = ({ onSubmit }: Props): ReactElement => {
  const styles = useStyles();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  return (
    <Grid container className={styles.root}>
      <Grid item xs={12} lg={6} className="login-box">
        <Grid item xs={12} className="login-box-heading">
          <Typography component="p">Enter your username</Typography>
        </Grid>
        <Grid item xs={12} className="login-box-input">
          <TextField
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value.trim() === '' || e.target.value.trim().length > 50) {
                setError(true);
              } else {
                setError(false);
              }
              setName(e.target.value);
            }}
            variant="outlined"
            error={error}
            id="outlined-error-helper-text"
            helperText={error ? "Incorrect name.": ""}
            classes={{
              root: "text-input",
            }}
            InputProps={{
              classes: {
                error: "text-input-error",
              }
            }}
          />
        </Grid>
        <Grid item xs={12} className="login-box-submit">
          <Button
            disabled={error || name.trim() === ''}
            classes={{
              root: "play-btn-root",
              disabled: "play-btn-disabled",
            }}
            onClick={() => {
              if (error || name.trim() === '' || name.trim().length > 50) {
                return;
              } else {
                localStorage.setItem('username', name.trim());
                onSubmit();
              }
            }}
          >
            Play
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
