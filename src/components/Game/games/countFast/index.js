import React, { useRef, useState, useEffect } from "react";

import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from '../../hooks/useUserData';

import Timer from './Timer';
import Card from './NumberCard';


import { orderNumbers, shuffleNumbers } from './util/numbers';

import styles from './style.scss';

export default () => {


  const { step, setStep } = useStep(); // Our data and methods
  const { scoring, setScoring } = useUserData(); // Our data and methods

  const [lowest, setLowest] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [numbers, setNumbers] = useState([]);


  let numbersArray = [];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    let arrRandom = orderNumbers(7);
    setNumbers(arrRandom);
    setLowest(Math.min.apply(Math, arrRandom));
    console.log("mas bajo es " + lowest)
  }, []);



  useEffect(() => {
    console.log("nuevo mas bajo es " + lowest)
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
    <section>
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
