import React from 'react';

export default () => {

  let avatares = [
    "static/img/icon-users/icons8-futurama-bender.png",
    "static/img/icon-users/icons8-homer-simpson.png",
    "static/img/icon-users/icons8-iron-man.png",
    "static/img/icon-users/icons8-jake.png",
    "static/img/icon-users/icons8-super-mario.png",
  ]

  return (
    <React.Fragment>
        <img alt="avatar" width="52px" src={avatares[Math.floor(Math.random() * avatares.length)]} />
    </React.Fragment>
  )
}
