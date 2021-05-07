import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./pages/about";
import Footer from "./components/Footer";
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';



function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Wrapper>
          <Switch>
          <Route exact path={["/", "/About"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> 
          </Switch>
        </Wrapper>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;