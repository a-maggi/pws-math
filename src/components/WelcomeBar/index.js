import React from 'react';
import RandomAvatar from './RandomAvatar';

export default ({
  nickname = "visitante",
  avatar,
  level = "Principiante"
}) => {
  return (
    <React.Fragment>
      <div className="welcome-bar">
        {!avatar && <RandomAvatar />}
        { avatar && <img alt="avatar" width="52px" src={avatar} /> }
        <div className="info">
          <div className="nickname">{nickname}</div>
          <div className="level">Nivel {level}</div>
        </div>
      </div>
      <style jsx>{`
        .welcome-bar {
          display: flex;
          align-items: center;
          color: #fff;
          margin: 0 0 10px;
        }
        .welcome-bar .info{
          text-align: left;
          padding: 3px 20px 3px 30px;
          font-size: 12px;
          background: #5751e0;
          margin-left: -20px;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        .welcome-bar .nickname {
          font-size: 16px;
        }
        .welcome-bar img {
          z-index: 999;
          position: relative;
        }
      
      `}</style>
    </React.Fragment>
  )
}
