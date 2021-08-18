// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import SelectRegion from 'src/components/SelectRegion';
import Footer from 'src/components/Footer';

// == Import css
import './styles.scss';

// == Import Components
import VisitorCalendar from 'src/containers/visitorCalendar';
import ButtonsTodayMonth from 'src/components/ButtonsTodayMonth';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <SelectRegion />
    <ButtonsTodayMonth />
    <VisitorCalendar />
    <Footer />
  </div>
);

// == Export
export default App;
