import React, { useState } from 'react';

import useUserData from '../hooks/useUserData';
import useStep from '../hooks/useStep';

export default () => {

  const { nickname, avatar, setNickname, setAvatar } = useUserData(); // Our data and methods
  const { setStep } = useStep(); // Our data and methods
  const [error, updateError] = useState(false);

  let avatares = [
    "static/img/icon-users/icons8-futurama-bender.png",
    "static/img/icon-users/icons8-homer-simpson.png",
    "static/img/icon-users/icons8-iron-man.png",
    "static/img/icon-users/icons8-jake.png",
    "static/img/icon-users/icons8-super-mario.png",
  ]

  const nicknameInput = React.createRef();

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (nicknameInput.current.value.trim() === '') {
      updateError(true);
      return;
    }
    updateError(false);
    setNickname(nicknameInput.current.value)
    setTimeout(() => {
      setStep(2);
    }, 5000);
    setAvatar(avatares[Math.floor(Math.random() * avatares.length)]);

  }

  const setForm = () => (
    <div>
      <div className="text">Antes de empezar, como te llamas?</div>
      <form onSubmit={onSubmit}>
        <input required type="text" ref={nicknameInput} placeholder="ingresa tu nombre o nickname"></input>
        {error && <div><em>Se detectaron errores, intente más tarde.</em></div>}
        <button type="submit" className="btn-next">
          <svg fill="#5870ed" width="12px" height="12px" viewBox="0 0 163.861 163.861"><g><path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <span>Comenzar</span>
        </button>
      </form>
    </div>
  );

  const setGreetings = () => (
    <div>
      <div className="text">Genial {nickname}! <br /> <small>Este sera tu avatar a partir de ahora.</small></div>
      <img alt="avatar" className="avatar" src={avatar}></img>
    </div>
  );



  return (
    <section className="stepNickname">
      {!nickname && setForm()}
      {nickname && setGreetings()}
    </section>
  )
}
