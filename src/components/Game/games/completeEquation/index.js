import React, { useRef, useState, useEffect } from "react";
import Equation from "./Equation";
import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from '../../hooks/useUserData';

import { getGame } from '../../../../utils/services'

import './style.scss';

export default () => {

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };


  const { setStep } = useStep(); // Our data and methods
  const { scoring, setScoring, level } = useUserData(); // Our data and methods

  const [used, setUsed] = useState([]);
  const prevArr = usePrevious(used);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState(1);
  const [randQuestion, setRandQuestion] = useState();
  const [tried, setTried] = useState(0);
  const [equation, setEquation] = useState([])
  const [possAns, setPossAns] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setRandQuestion(randomNumber(equation));
  }, [prevArr]);

  useEffect(() => {
    if( question  > 5 ) setStep(99) // Voy a scoring
  }, [question]);


  useEffect(() => {
    console.log('Getting data for level: ', level)
    getGame('equationGame', level).then(data => {
      const { equation: equationData, possAnswer, answer } = data;
      console.log('Data succesfully retrieved')
      setEquation(equationData);
      setPossAns(possAnswer);
      setAnswers(answer);
      setRandQuestion(randomNumber(equationData));
      setIsLoading(false)
    });
  }, []);


  let defineScore = (score) => {
    let newScore = (score + scoring >= 0) ? score + scoring : 0;
    setScoring(newScore);
  }

  let randomNumber = (equations) => {
    if (equations.length === used.length) return false;
    let values = equations.filter(x => !used.includes(x)).concat(used.filter(x => !equations.includes(x)));
    let random = Math.floor(Math.random() * values.length);
    let randomN = values[random]
    return equations.indexOf(randomN);
  }


  let selectCard = (card, answer, index) => {
    if (card === answer || tried > 1) {
      const temp = [...used];
      temp.push(equation[index]);
      setUsed(temp);
      setQuestion(question + 1);
      setIsClicked(false);
      setTried(0);
    }
    if (card === answer) {
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
          <div className="subtext">Completa la ecuación, seleccionando una card</div>
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
