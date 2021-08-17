// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import SelectRegion from 'src/components/SelectRegion';
import Footer from 'src/components/Footer';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SelectRegion />
    <Footer />
  </div>
);

// == Export
export default App;
