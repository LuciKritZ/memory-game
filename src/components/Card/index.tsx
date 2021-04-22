import React, { ReactElement, useState, useEffect } from 'react';
import { typesOfCards } from '../utils/constants';
import IndividualCard from '../individual-card/index';
import { Grid, Button } from '@material-ui/core';
import useStyles from './styles';
import clsx from 'clsx';

type Props = {
  numberOfCards: number;
  startTime: Date;
  playAgain: () => void;
};

type CardType = {
  name: string;
  close: boolean;
  complete: boolean;
  fail: boolean;
};

type FrameworkType = {
  name: string;
  index: number;
};

const Card = ({ numberOfCards, startTime, playAgain }: Props): ReactElement => {
  const [finalizedCards, setFinalizedCards] = useState<Array<CardType>>([]);
  const [openedCards, setOpenedCards] = useState<Array<FrameworkType>>([]);
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [isGameEnded, setIsGameEnded] = useState(false);
  const styles = useStyles();

  /** 
    * This function is used to do the comparison of the elements present in the openedCards array.
    * @return {void}
  */
  const check = (): void => {
    let finalizedFrameworks = finalizedCards;
    /**
      Checking whether the name of the elements present in the openedCards array are the same,
      but the index are different. It will show if the cards are different sequence wise.
    */
    if (
      (openedCards[0].name === openedCards[1].name) &&
      (openedCards[0].index !== openedCards[1].index)
    ) {
      /**
        If they are same, then update the complete property of the particular objects in the finalizedCards to true.
      */
      finalizedFrameworks[openedCards[0].index].complete = true;
      finalizedFrameworks[openedCards[1].index].complete = true;
    } else {
      /**
        Otherwise close the elements by setting the close property of the particular objects in the finalizedCards to true.
      */
      finalizedFrameworks[openedCards[0].index].close = true;
      finalizedFrameworks[openedCards[1].index].close = true;
    }
    // Checking whether the game is ended.
    const gameHasFinished = finalizedFrameworks.filter((framework: CardType) => framework.complete === true);
    if (gameHasFinished.length === finalizedFrameworks.length) {
      setIsGameEnded(true);
      setEndTime(new Date());
    }
    // Then update the states with the updated frameworkCards value and empty the openedFrameworks array.
    setFinalizedCards(finalizedFrameworks);
    setOpenedCards([]);
  };

  /**
    * The event that is being fired when the user clicks on the card.
    * @param {string} name - The name of the card on which the user has clicked.
    * @param {number} index - The index of the card on which the user has clicked.
    * @return {void}
  */
  const handleClick = (name: string, index: number): void => {
    /**
      Checking whether the length of the openedCards array is 2,
      so that we can check whether both the elements in the array are of the same framework.
    */
    if (openedCards.length === 2) {
      setTimeout(() => {
        check();
      }, 750);
    } else {
      /**
        If the length is 1 or 0, then we will create the element and push it inside the openedCards array.
      */
      let framework: FrameworkType = {
        name,
        index,
      };
      let finalizedFrameworks = finalizedCards;
      let frameworks: Array<FrameworkType> = openedCards;
      finalizedFrameworks[index].close = false;
      frameworks.push(framework);
      setOpenedCards(frameworks);
      setFinalizedCards(finalizedFrameworks);
      /**
        After the element is pushed, if the length becomes 2, then we will do the comparison again.
      */
      if (frameworks.length === 2) {
        setTimeout((): void => {
          check();
        }, 750);
      };
    }
  };

  /** 
    * Shuffling the cards in the random order.
    * @param {array} array - The array that is required to be shuffled.
    * @return {array} The array after being shuffled.
  */
  const shuffle = (array: Array<string>): Array<string> => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  /** 
    * Function to be called when the component is mounted.
  */
  const start = (): void => {
    let finalizedFrameworks: Array<CardType> = [];
    const uniqueCards = typesOfCards.splice(0, numberOfCards / 2);
    let duplicatedFrameworks: Array<string> = uniqueCards.concat(uniqueCards);
    console.log(duplicatedFrameworks, 'duplicatedFrameworks');
    let randomizedFrameworks = shuffle(duplicatedFrameworks);
    randomizedFrameworks.forEach((name: string): void => {
      finalizedFrameworks.push({
        name,
        close: true,
        complete: false,
        fail: false
      });
    });
    setFinalizedCards(finalizedFrameworks);
  }

  useEffect((): void => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTotalTimeTaken = (): number => {
    let timeDiff: number = endTime.getTime() - startTime.getTime(); //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    const seconds = Math.round(timeDiff);
    return seconds;
  };

  return (
    <Grid container className={styles.root}>
      <Grid xs={12} className={clsx("playground-container")}>
        {isGameEnded && (
          <Grid item xs={12}>
            <h1>{`You've completed the game in ${getTotalTimeTaken()} seconds for ${numberOfCards} cards.`}</h1>
            <Button onClick={playAgain}>Play Again</Button>
          </Grid>
        )}
        {!isGameEnded && finalizedCards.map((framework: CardType, index: number): ReactElement => {
          return (
            <IndividualCard
              framework={framework.name}
              click={() => handleClick(framework.name, index)}
              close={framework.close}
              complete={framework.complete}
            />
          );
        })}
      </Grid>
    </Grid >
  );
};

export default Card;
