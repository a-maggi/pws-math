import React from 'react'
import useStep from './hooks/useStep';
import useUserData from 'hooks/useUserData';
import StepNickname from './steps/stepNickname';
import StepLevel from './steps/stepLevel';
import StepGame from './steps/stepGame';
import StepScoring from './steps/stepScoring';

import CompleteEquation from './games/completeEquation';
import CountFast from './games/countFast';
import NumberPattern from './games/numberPattern';


import WelcomeBar from "components/WelcomeBar";

export default () => {

  const { step, setStep } = useStep(); // Our data and methods
  const { nickname, avatar, level, setLevel, setScoring } = useUserData(); // Our data and methods

  let renderStep = () => {
    switch (step) {
      case 1:
        return <StepNickname />
      case 2:
        return <StepLevel />
      case 3:
        return <StepGame />
      case 6:
        return <CompleteEquation />
      case 7:
        return <CountFast />
      case 8:
        return <NumberPattern />
      case 99:
        return <StepScoring />
      default:
        return <StepNickname />
    }
  }

  const changeLevel = () => {
    setLevel(false);
    setStep(2);
  }

  
  const gotoHome = () => {
    setScoring(0);
    setStep(3);
  }

  React.useEffect(() => {
    if (nickname && level) setStep(3)
    else if (nickname) setStep(2)
  }, []);

  let ButtonBackHome = () => (
    <div className="btn-center">
      <button className="btn-next" onClick={gotoHome}>Cambiar de juego</button>
    </div>
  )

  let ButtonBackLevel = () => (
    <div className="btn-center">
      <button className="btn-next" onClick={changeLevel}>Cambiar dificultad</button>
    </div>
  )

  return (
    <section className="game-box">
      <div className="container">
        {nickname && step > 2 && <WelcomeBar nickname={nickname} avatar={avatar} level={level}></WelcomeBar>}
        {renderStep()}
        {step == 3 && <ButtonBackLevel />}
        {step > 3 && step < 99 && <ButtonBackHome />}
        <img alt="dog" src="/static/img/dog.png" className="dog"></img>
      </div>
    </section>
  );
};
