import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

import GamePage from "pages/GamePage";
import RankingPage from "pages/RankingPage";
import HelpPage from "pages/HelpPage";

import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/inicio" component={GamePage} />
          <Route exact path="/puntajes" component={RankingPage} />
          <Route exact path="/ayuda" component={HelpPage} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
