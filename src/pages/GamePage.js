import React from "react";
import Layout from "components/Layout";
import Game from "components/Game";

const GamePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="boxContainer">
          <Game/>
        </div>
      </div>

      <style jsx>{`
        .games-container {
          padding: 3em 0;
        }
        .games-container .title {
          padding: 0.5em 0 1em;
          font-size: 1.5em;
        }
        .games-container .game-box {
          min-height: 300px;
          background: #50c5ed;
          border-radius: 0.5em;
          position: relative;
        }
        .games-container .game-box button {
          background: #fff;
          padding: 8px 15px;
          position: absolute;
          bottom: 15px;
          border: 0;
          color: #50c5ed;
          left: 15px;
          border-radius: 10px;
        }
        .container {
          width: 100%;
          max-width: 900px;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </Layout>
  );
};

export default GamePage;
