import React from "react";
import Link from 'components/Link';

import './_site-navbar.scss';

const Header = () => {


  return (
    <React.Fragment>
      <header className="Header">
        <div className="site-navbar">
          <div className="container">
            <div className="logo-header flex-grow-1 bd-highlight">
              <Link route="/inicio"><img alt="logo" width="160" src="static/img/logo.png"></img></Link>
            </div>
            <div className="main-nav">
              <nav className="site-navigation" role="navigation">
                <ul className="site-menu">
                  <li><Link route="/inicio" className="text-light"><img alt="home" className="icon" src="/static/img/home-icon.png"/></Link></li>
                  <li><Link route="/ayuda" className="text-light"><img alt="ayuda" className="icon" src="/static/img/info-icon.png"/></Link></li>
                  <li><Link route="/puntajes" className="text-light"><img alt="puntaje" className="icon" src="/static/img/ranking-icon.png"/></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
export default Header;