import React, { useRef, useState, useEffect } from "react";
import NumberCard from "./NumberCard";
import ScreenLoading from "../../util/screenLoading";

import useStep from '../../hooks/useStep';
import useUserData from '../../hooks/useUserData';

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
  const { scoring, setScoring } = useUserData(); // Our data and methods

  const [used, setUsed] = useState([]);
  const prevArr = usePrevious(used);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState(1);
  const [randQuestion, setRandQuestion] = useState();
  const [tried, setTried] = useState(0);


  const sequences = [
    "1, 4, 7, 10, 13, 16, 19, 22, __",
    "1, 2, 3, 5, 8, 13, __, 34, 55",
    "1, 2, 4, __, 16, 32, 64, 128, 256",
  ];
  const possAns = [
    ["21", "22", "23", "24", "25", "26", "27", "28"],
    ["11", "13", "15", "16", "18", "20", "21", "24"],
    ["2", "5", "8", "12", "17", "22", "48", "96"],
  ];
  const answers = ["25", "21", "8"];

  useEffect(() => {
    setRandQuestion(randomNumber());
  }, [prevArr]);
  
  useEffect(() => {
    if( question  > 3 ) setStep(99) // Voy a scoring
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
    if (sequences.length === used.length) return false;
    let values = sequences.filter(x => !used.includes(x)).concat(used.filter(x => !sequences.includes(x)));
    let random = Math.floor(Math.random() * values.length);
    let randomN = values[random]
    return sequences.indexOf(randomN);
  }


  let selectCard = (card, answer, index) => {
    if (card === answer || tried > 1) {
      const temp = [...used];
      temp.push(sequences[index]);
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
        <div className="text">Problema {question}/{sequences.length}</div>

        <div className="card-panel">
          <div id="question">
            <p id="equation">{sequences[randQuestion]}</p>
          </div>
          <div className="subtext">Completa la ecuación, seleccionando una card</div>
          <div className="cards-answer">

            {!isNaN(randQuestion) && possAns[randQuestion] && possAns[randQuestion].map((item) => (
              <NumberCard
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
