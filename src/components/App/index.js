// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/components/Header';
import Connect from 'src/containers/Connect';
import SelectRegion from 'src/containers/SelectRegion';
import VisitorCalendar from 'src/containers/VisitorCalendar';
import Footer from 'src/components/Footer';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <Route path="/connexion" exact>
      <Connect />
    </Route>
    <Route path="/" exact>
      <SelectRegion />
      <VisitorCalendar />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
