import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Arts from './containers/Arts';
import AboutMe from './containers/AboutMe';
import Landing from './containers/Landing';
import ArtPage from './containers/Arts/art-page';
import './assets/styles.scss';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/artpage/:id">
          <ArtPage />
        </Route>
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
          <Redirect to="/landing" />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
