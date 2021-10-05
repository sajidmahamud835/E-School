import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Main></Main>
          </Route>

          <Route exact path="/home">
            <Main></Main>
          </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
