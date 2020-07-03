import React, { useState, useEffect } from "react";

import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from 'hooks/useUserData';

import Timer from './Timer';
import Card from './NumberCard';

import { getGame } from '../../../../utils/services'

import { orderNumbers, shuffleNumbers } from './util/numbers';

import './style.scss';

export default () => {


  const { setStep } = useStep(); // Our data and methods
  const { scoring, setScoring, level } = useUserData(); // Our data and methods

  const [lowest, setLowest] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [numbers, setNumbers] = useState([]);
  const [nonUsed, setNonUsed] = useState([]);


  useEffect(() => {
    console.log('Getting data for level: ', level)
    getGame('countFast', level).then(data => {
      const { numbers } = data
      console.log('Data succesfully retrieved')
      const shuffledNumbers = shuffleNumbers(numbers)
      setNumbers(shuffledNumbers);
      setNonUsed([...shuffledNumbers]);
      setLowest(Math.min.apply(Math, shuffledNumbers));
      setIsLoading(false)
    });
  }, []);



  useEffect(() => {
    if (!isFinite(lowest))
      setStep(99) // Voy a scoring
  }, [lowest]);



  let defineScore = (score) => {
    let newScore = (score + scoring >= 0) ? score + scoring : 0;
    setScoring(newScore);
  }


  let selectCard = (number) => {
    const numberIndex = nonUsed.indexOf(number);
    nonUsed.splice(numberIndex, 1);
    const lowestNumber = Math.min.apply(Math, nonUsed);
    setLowest(lowestNumber);
    setIsClicked(false);
  }

  if (isLoading) return <ScreenLoading />

  return (
    <section className="game-fastcard">
      <div className="text">¿Cuán rápido podes contar?</div>

      <div className="card-panel">

        <Timer></Timer>
        <div className="cards-answer">
          {numbers.map((item) => (
            <Card
              number={item}
              lowest={lowest}
              score={defineScore}
              action={selectCard}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          ))}

        </div>

      </div>
    </section>
  )


}
