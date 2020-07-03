import React from 'react'

import useUserData from 'hooks/useUserData';
import useStep from '../hooks/useStep';

export default () => {


  const { level, setLevel } = useUserData(); // Our data and methods
  const { step, setStep } = useStep(); // Our data and methods

  const handleAction = (e, action) => {
    e.preventDefault();
    setLevel(action);
  };

  const nextStep = (e) => {
    setStep(3);
  }

  return (
    <section>
      <div className="text">Con que dificultad te gustaria jugar?</div>
      <div className="options row align-items-center">
        <div className={`col item ${level === "Principiante" ? "active" : null}`} onClick={e => handleAction(e, "Principiante" )}>
          <div className="top">
            <img src="/static/img/principiante.png"></img>
          </div>
          <div className="content">
            <h3>Principiante</h3>
          </div>
        </div>
        <div className={`col item ${level === "Intermedio" ? "active" : null}`} onClick={e => handleAction(e, "Intermedio")}>
          <div className="top">
            <img src="/static/img/intermedio.png"></img>
          </div>
          <div className="content">
            <h3>Intermedio</h3>
          </div>
        </div>
        <div className={`col item ${level === "Experto" ? "active" : null}`} onClick={e => handleAction(e, "Experto")}>
          <div className="top">
            <img src="/static/img/experto.png"></img>
          </div>
          <div className="content">
            <h3>Experto</h3>
          </div>
        </div>
      </div>
      <button onClick={e => nextStep(e)} disabled={!level} className="btn-next">
        <span>Siguiente paso</span>
        <svg fill="#5870ed" width="12px" height="12px" viewBox="0 0 46.02 46.02"><g><g><path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
      </button>
      <style jsx>{`
    
    `}</style>
    </section>
  );
}
