import React from 'react';
import Link from 'components/Link';

const HomePage = () => {

  return (
    <section>
      <header>
        <div className="logo">
          <img alt="logo" width="160" src="static/img/logo.png"></img>
        </div>
      </header>
      <main>
        <div className="awesome-component">
          <div className="container">
            <div className="big-text">
              <div className="header-bg"></div>
              <div className="header-blend">
                <h2>Vive una <br /> Aventura</h2>
              </div>
            </div>
            <div className="sub-content d-flex flex-column align-items-center">
              <div className="sub-text">Juega, aprende y diviertete</div>
              <div className="action"><button><Link route="/inicio">Ingresar</Link></button></div>
            </div>
          </div>
        </div>
        <div className="super-images">
          <div className="line">
            <figure><img alt="juego para niños" src="/static/img/snaps/14.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/5.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/4.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/2.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/11.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/7.png"></img></figure>
          </div>
          <div className="line">
            <figure><img alt="juego para niños" src="/static/img/snaps/6.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/10.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/9.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/8.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/13.png"></img></figure>
            <figure><img alt="juego para niños" src="/static/img/snaps/3.png"></img></figure>
          </div>
        </div>
      </main>
      <style jsx>{`
        body{ 
          overflow: hidden;
        }
        header {
          padding: 2em 4em;
        }
        .awesome-component{
          padding: 120px 0;
        }
        .big-text{
          position: relative;
          text-align: center;
        }
        .header-bg{
          position: absolute;
          top: -30px;
          left: -30px;
          right: -30px;
          bottom: -30px;
          background-image: url(/static/img/snaps/1.jpg);
          -webkit-background-size: cover;
          -moz-background-size: cover;
          background-size: cover;
          contain: strict;
        }
        .header-blend{
          mix-blend-mode: screen;
        }
        .header-blend:before {
          content: "";
          position: absolute;
          top: -50px;
          left: -50px;
          right: -50px;
          bottom: -50px;
          z-index: -1;
          background: #fff;
        }
        .header-blend h2{
          font-family: Montserrat,sans-serif;
          font-size: 60px;
          font-weight: 700;
          letter-spacing: -.04em;
          line-height: 100%;
        }
        .sub-text{
          font-size: 28px;
          z-index: 999;
          position: relative;
          text-align: center;
          color: #000;
        }

        button {
          color: #ddd;
          border: 2px currentColor solid;
          -webkit-border-radius: 52px;
          -moz-border-radius: 52px;
          border-radius: 52px;
          padding: .7em 2em;
          font-size: 21px;
          background: #fff;
          margin: 1em 0;
        }

        button a:hover {
          text-decoration: none
        }


        .super-images {
          text-align: center;
        }
        .super-images .line {
          line-height: 0;
          white-space: nowrap;
        }
        .super-images figure {
          border-radius: 10px;
          overflow: hidden;
          margin: 14px 7px;
          width: 175px;
          display: inline-block;
        }
        .super-images figure img {
          width: 100%;
        }
        .super-images .line:nth-child(1){
          transform: translate3d(-46.4732px, 0px, 0px);
        }
        .super-images .line:nth-child(2){
          transform: translate3d(-79.0748px, 0px, 0px);
        }
        @media (min-width: 768px){
          .header-blend h2 {
              font-size: 120px;
          }
          .super-images figure{
            width: 275px;
          }
        }

        
        @media (min-width: 1200px){
          .header-blend h2 {
              font-size: 145px;
          }
        }

        
        @media (min-width: 1600px) {
          .header-blend h2 {
              font-size: 160px;
          }
        }
        @media (min-width: 2000px) {
          .super-images figure {
              width: 500px;
          }
        }
        `}</style>
    </section>
  );
}

export default HomePage;
