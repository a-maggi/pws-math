import React, { useState, useEffect } from "react";

import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from '../../hooks/useUserData';

import Timer from './Timer';
import Card from './NumberCard';


import { orderNumbers, shuffleNumbers } from './util/numbers';

import './style.scss';

export default () => {


  const { setStep } = useStep(); // Our data and methods
  const { scoring, setScoring } = useUserData(); // Our data and methods

  const [lowest, setLowest] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [numbers, setNumbers] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    let arrRandom = orderNumbers(7);
    arrRandom = shuffleNumbers(arrRandom);
    setNumbers(arrRandom);
    setLowest(Math.min.apply(Math, arrRandom));
  }, []);



  useEffect(() => {
    if (lowest == Math.max.apply(Math, numbers) + 1)
      setStep(99) // Voy a scoring
  }, [lowest]);



  let defineScore = (score) => {
    let newScore = (score + scoring >= 0) ? score + scoring : 0;
    setScoring(newScore);
  }


  let selectCard = (number) => {
    setLowest(number+1);
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
