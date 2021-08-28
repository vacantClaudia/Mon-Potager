// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Connect from 'src/containers/Connect';
import Footer from 'src/components/Footer';
import PlantsList from 'src/containers/PlantsList';
import NotFound from 'src/components/NotFound';
import SignUp from 'src/containers/SignUp';

// == App component
const App = () => (
  <div className="app">

    <Header />

    <Switch>

      <Route path="/connexion" exact>
        <Connect />
        <SignUp />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/plantes" exact>
        <PlantsList />
      </Route>

      <Route>
        <NotFound />
      </Route>

    </Switch>

    <Footer />

  </div>
);

// == Export
export default App;
