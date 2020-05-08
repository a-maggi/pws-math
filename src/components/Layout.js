import Header from './Header';
import Main from './Main';
import React from 'react'

export default ({ children }) => {
  return (
    <div id="layout">
      <Header/>
      <Main>
        {children}
      </Main>
      <style jsx>{`
          body{
            background: #f7f1f0;
          }
          #layout {
            margin: 2em auto;
          }
      `}</style>
    </div>
  );
};
