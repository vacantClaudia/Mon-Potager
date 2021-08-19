// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import SelectRegion from 'src/containers/SelectRegion';
import Footer from 'src/components/Footer';

// == Import css
import './styles.scss';
import data from 'src/data/data';

// console.log(data);
// console.log(data.[0].id);
// console.log(data.[0].title.rendered);
// console.log(data.[0].regions);

// == Import Components
import VisitorCalendar from 'src/containers/visitorCalendar';

// == App component
const App = () => (
  <div className="app">
    <Header />
    <SelectRegion
      id={data.[0].id}
      title={data.[0].title.rendered}
      region={data.[0].regions}
    />
    <Footer />
  </div>
);

// == Export
export default App;
