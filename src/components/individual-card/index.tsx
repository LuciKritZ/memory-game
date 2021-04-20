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
    console.log('Iddhar');
    setClosed(close);
  }, [close, complete, click, framework]);
  
  const styles = useStyles();

  /**
   * Action to be performed on the click of the card.
   * @param  {String} framework - Name of the framework
   * @return {void}
  */
  const clicked = (framework: string): void => {
    console.log(close, complete);
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
                src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework}.png`}
                alt={framework}
              />
            </div>
          ) : (
            <div className="">
              ?
            </div>
          )
        }
      </Grid>
    </Grid>
  );
};

export default IndividualCard;
