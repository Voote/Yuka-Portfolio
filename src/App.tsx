import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Arts from './containers/Arts';
import AboutMe from './containers/AboutMe';
import Landing from './containers/Landing';
import Navbar from './components/navbar';
import './assets/styles.scss';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/arts">
          <Arts />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
