import React, { ReactElement, useState } from 'react';
import Game from '../game/index';
import Loader from '../common/Loader';
import Card from '../card/index';

const Playground = (): ReactElement => {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [isGameBegun, setIsGameBegun] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<Date>(new Date());

  const startGame = (cards: number) => {
    setStartTime(new Date());
    setLoading(true);
    setNumberOfCards(cards);
    setIsGameBegun(true);
    setLoading(false);
  };

  if (loading) {
    return <Loader fullScreen />;
  };

  return (
    isGameBegun ? <Card numberOfCards={numberOfCards} startTime={startTime} /> : <Game startGame={startGame} />
  );
};

export default Playground;
