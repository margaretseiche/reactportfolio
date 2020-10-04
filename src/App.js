import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import NoMatchPage from "./pages/NoMatch";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/404" component={NoMatchPage} />
              <Redirect to="/404" />
            </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App;