import React from "react";
//Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:movieId" component={Movie} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
