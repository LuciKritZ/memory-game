import React, { ReactElement } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { loaderStyles } from './styles';

type Props = {
  fullScreen: boolean;
  defaultColor: boolean;
};

const Loading = ({ fullScreen, defaultColor }: Props): ReactElement => {
  const styles = loaderStyles();
  const className = fullScreen ? styles.loaderContainerFull : styles.loaderContainer;
  return (
    <Grid container item xs={12} className={className}>
      <CircularProgress classes={{ colorPrimary: !defaultColor ? styles.colorPrimary : styles.colorDefault }} />
    </Grid>
  );
};

export default Loading;
