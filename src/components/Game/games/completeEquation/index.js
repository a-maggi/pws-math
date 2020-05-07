import React, { useRef, useState, useEffect } from "react";
import Equation from "./Equation";
import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from '../../hooks/useUserData';

import styles from './style.scss';

export default () => {

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };


  const { step, setStep } = useStep(); // Our data and methods
  const { scoring, setScoring } = useUserData(); // Our data and methods

  const [used, setUsed] = useState([]);
  const prevArr = usePrevious(used);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState(1);
  const [randQuestion, setRandQuestion] = useState();
  const [tried, setTried] = useState(0);


  const equation = [
    "2 x ? = 8",
    "14 / ? = 7",
    "2 x ? x 2 = 16",
    "10 - ? = 5",
    "5 + ? = 50",
    "14 - ? = 9",
    "5 + ? = 8",
    "3 x ? - 5 = 13",
    "5 x ? = 25",
    "49 / ? = 7",
  ];
  const possAns = [
    ["5", "10", "4", "2"],
    ["14", "7", "2", "1"],
    ["2", "4", "8", "3"],
    ["5", "3", "2", "10"],
    ["10", "35", "45", "25"],
    ["3", "2", "5", "7"],
    ["3", "5", "2", "10"],
    ["5", "4", "6", "2"],
    ["10", "8", "5", "3"],
    ["7", "14", "21", "10"],
  ];
  const answers = ["4", "2", "4", "5", "45", "5", "3", "6", "5", "7"];

  useEffect(() => {
    let random = randomNumber();
    if (random) setRandQuestion(random);
    console.log("nuevo random " + randQuestion)
  }, [prevArr]);

  
  
  useEffect(() => {
    if( question  > 10 ) setStep(99) // Voy a scoring
  }, [question]);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, []);


  let defineScore = (score) => {
    let newScore = (score + scoring >= 0) ? score + scoring : 0;
    setScoring(newScore);
  }

  let randomNumber = () => {
    if (equation.length == used.length) return false;
    let randomValue = Math.floor(Math.random() * equation.length);
    let randomEq = equation[randomValue]
    if (used.indexOf(randomEq) != -1) {
      randomNumber();
      return false;
    }
    return randomValue;
  }


  let selectCard = (card, answer, index) => {
    if (card == answer || tried > 1) {
      const temp = [...used];
      temp.push(equation[index]);
      setUsed(temp);
      setQuestion(question + 1);
      setIsClicked(false);
      setTried(0);
    }
    if (card == answer) {
      defineScore(10);
      return true;
    }

    if (tried > 1) {
      defineScore(-10);
      return true;
    }
    setIsClicked(false);
    setTried(tried + 1);
    return false;
  }

  if (isLoading) return <ScreenLoading/>

  if (question <= 10) {
    return (
      <section> 
        <div className="text">Problema {question}/{equation.length}</div>

        <div className="card-panel">
          <div id="question">
            <p id="equation">{equation[randQuestion]}</p>
          </div>

          <div className="text">Completa la ecuación, seleccionando una card</div>
          <div className="cards-answer">

            {!isNaN(randQuestion) && possAns[randQuestion] && possAns[randQuestion].map((item) => (
              <Equation
                possAns={item}
                answer={answers[randQuestion]}
                index={randQuestion}
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

  return null;

}
