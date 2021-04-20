import React, { ReactElement } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { loaderStyles } from './styles';

type Props = {
  fullScreen: boolean;
};

const Loading = ({ fullScreen }: Props): ReactElement => {
  const styles = loaderStyles();
  const className = fullScreen ? styles.loaderContainerFull : styles.loaderContainer;
  return (
    <Grid container item xs={12} className={className}>
      <CircularProgress classes={{ colorPrimary: styles.colorPrimary }} />
    </Grid>
  );
};

export default Loading;
