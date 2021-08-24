// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/components/Header';
import Connect from 'src/containers/Connect';
import VisitorCalendar from 'src/containers/VisitorCalendar';
import Footer from 'src/components/Footer';
import PlantsList from 'src/components/PlantsList';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <Route path="/connexion" exact>
      <Connect />
    </Route>
    <Route path="/" exact>
      <VisitorCalendar />
    </Route>
    <Route path="/plantes" exact>
      <PlantsList />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
