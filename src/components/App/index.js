// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/containers/Header';
import Connect from 'src/containers/Connect';
import VisitorCalendar from 'src/containers/VisitorCalendar';
import Footer from 'src/components/Footer';
import PlantsList from 'src/containers/PlantsList';
import NotFound from 'src/components/NotFound';

// == App component
const App = () => (
  <div className="app">

    <Header />

    <Switch>

      <Route path="/connexion" exact>
        <Connect />
      </Route>

      <Route path="/" exact>
        <VisitorCalendar />
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
