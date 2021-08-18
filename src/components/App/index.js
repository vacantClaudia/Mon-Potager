// == Import npm
import React from 'react';

// == Import css
import './styles.scss';

// == Import Components
import Header from 'src/components/Header';
import SelectRegion from 'src/components/SelectRegion';
import VisitorCalendar from 'src/containers/VisitorCalendar';
import Footer from 'src/components/Footer';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <SelectRegion />
    <VisitorCalendar />
    <Footer />
  </div>
);

// == Export
export default App;
