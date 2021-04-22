import React, { ReactElement, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import clsx from 'clsx';

type Props = {
  close: boolean;
  complete: boolean;
  click: (framework: string) => void;
  framework: string;
};

const IndividualCard = ({ close, complete, click, framework }: Props): ReactElement => {
  const [closed, setClosed] = useState(close);

  useEffect(() => {
    setClosed(close);
  }, [close, complete, click, framework]);

  const styles = useStyles();

  /**
   * Action to be performed on the click of the card.
   * @param  {String} framework - Name of the framework
   * @return {void}
  */
  const clicked = (framework: string): void => {
    if (close) {
      setClosed(false);
    }
    click(framework);
  };


  return (
    <Grid className={styles.root}>
      <Grid
        className={clsx(!closed ? 'opened' : '', complete ? 'matched' : '')}
        onClick={() => clicked(framework)}
      >
        {
          !closed || (closed && complete) ? (
            <div className="">
              <img
                className="image-loaded"
                src={`${process.env.PUBLIC_URL}/assets/logos/${framework}.png`}
                alt={framework}
              />
            </div>
          ) : (
            <Grid xs={12} className="question-mark">
              <p>?</p>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  );
};

export default IndividualCard;
