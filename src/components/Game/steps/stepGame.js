import React from 'react'

import useStep from '../hooks/useStep';
import Link from "components/Link";

export default () => {


  const { step, setStep } = useStep(); // Our data and methods

  const nextStep = (e, step) => {
    e.preventDefault();
    setStep(step);
  };

  return (
    <section>
      <div className="text">Elige un desafio matematico para jugar</div>


      <div className="game-items row">
        <div className="game-item frog">
          <div className="info">
            <div className="name">Patrón de Números</div>
            <div className="summary">Encuentra el siguiente numero resolviendo el patron que lo genera.</div>
          </div>
          <div className="btn-play">
            <button className="btn-next">
              <svg fill="#aadc35" width="12px" height="12px" viewBox="0 0 163.861 163.861"><g><path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <span>Jugar</span>
            </button>
          </div>
        </div>
        <div className="game-item giraffe">
          <div className="info">
            <div className="name">Cuán rápido podes contar?</div>
            <div className="summary">Selecciona distintas tarjetas, siguiendo un orden numerico para ganar.</div>
          </div>
          <div className="btn-play">
            <button onClick={e => nextStep(e, 7)} className="btn-next">
              <svg fill="#9292ff" width="12px" height="12px" viewBox="0 0 163.861 163.861"><g><path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <span>Jugar</span>
            </button>
          </div>
        </div>
        <div className="game-item penguin">
          <div className="info">
            <div className="name">Completar ecuación</div>
            <div className="summary">Resuelve la ecucacion matematica para ganar este juego.</div>
          </div>
          <div className="btn-play">
            <button onClick={e => nextStep(e, 6)} className="btn-next">
              <svg fill="#64d3ff" width="12px" height="12px" viewBox="0 0 163.861 163.861"><g><path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <span>Jugar</span>
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
