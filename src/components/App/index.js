// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import SelectRegion from 'src/containers/SelectRegion';
import Footer from 'src/components/Footer';

// == Import css
import './styles.scss';

// == Import Components
import VisitorCalendar from 'src/containers/visitorCalendar';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <SelectRegion />
    <Footer />
  </div>
);

// == Export
export default App;
