import React from "react";
import Layout from "components/Layout";

const HelpPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="boxContainer">
          <div className="about-section">
            <h1>MATEMÁTICA</h1>
            <h2>Aprender jugando.</h2>
            <h3>Nuestro objetivo principal es que los niños a través de actividades puedan divertirse y además aprender.</h3>
          </div>

          <h2 className="sub">ALGUNAS DE NUESTRAS ACTIVIDADES</h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="container">
                  <h2 className="h2-style">CUENTA RAPIDO</h2>
                  <p className="title">MATEMÁTICA</p>
                  <p className="p-style">Tendrás un tablero con numeros y deberás elegir desde el más chico hasta el más grande.</p>
                  <img className="imagen" src="/static/img/maxresdefault.jpg" width="390" height="150" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="container">
                  <h2 className="h2-style">COMPLETAR LA ECUACION</h2>
                  <p className="title">MATEMÁTICA</p>
                  <p className="p-style">Dada una ecuación, tendrás que obtener la incognita de la misma.</p>
                  <img className="imagen" src="/static/img/estudiantes-aprendizaje-matematicas-sala-clase-ilustracion_1308-1094-e1539793921492-582x199.jpg" width="390" height="150" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="container">
                  <h2 className="h2-style">PATRON NUMERICO</h2>
                  <p className="title">MATEMÁTICA</p>
                  <p className="p-style">Este juego tiene una sucesión de numeros, pero nos falta uno, tu objetivo es averiguarlo.</p>
                  <img className="imagen" src="/static/img/acertijos_matematicas_suma_1.jpg" width="390" height="150" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
         .column {
          float: left;
          width: 33.3%;
          margin-bottom: 16px;
          padding: 0 8px;
        }
        .sub{
          padding: 20px 0;
        }
        
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          margin: 8px;
          border-radius: 15px;
          background-color: white;
        }
        
        .about-section {
          background-image: url("./static/img/cloud.png");
          font-weight: 700;
          padding: 10px;
          text-align: center;
          color: black;
          border-radius: 3em;
        }
        
        .container {
          padding: 0 16px;
          padding: 2em;
        }
        
        .container::after, .row::after {
          content: "";
          clear: both;
          display: table;
        }
        
        .title {
          color: black;
          text-align: center;
          font-size: large;
          font-weight: 700;
        }
        
        .h2-style {
          text-align: center;
          font-weight: 750;
          font-size: 20px;
        }
        
        .imagen {
          border-radius: 15px;
          width: 100%
        }
      
        .p-style {
          font-weight: 600;
        }
      
        .image-home{
          width: 35px;
          border-radius: 15px;
        }
        
        @media screen and (max-width: 650px) {
          .column {
            width: 100%;
            display: block;
          }
        }
        .boxContainer{

          text-align:center;  
        }
        .container {
          width: 100%;
          max-width: 1200px;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </Layout>
  );
};

export default HelpPage;
