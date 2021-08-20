// == Import npm
import React from 'react';
<<<<<<< HEAD
=======
import Header from 'src/components/Header';
import SelectRegion from 'src/containers/SelectRegion';
import Footer from 'src/components/Footer';
>>>>>>> feature/homeSelect

// == Import css
import './styles.scss';
// import data from 'src/data/data';

// console.log(data);
// console.log(data.[0].id);
// console.log(data.[0].title.rendered);
// console.log(data.[0].regions);

// == Import Components
import Header from 'src/components/Header';
import SelectRegion from 'src/components/SelectRegion';
import VisitorCalendar from 'src/containers/VisitorCalendar';
import Footer from 'src/components/Footer';

// == App component
const App = () => (
  <div className="app">
    <Header />
<<<<<<< HEAD
    <SelectRegion />
    <VisitorCalendar />
=======
    <SelectRegion
      // id={data.[0].id}
      // title={data.[0].title.rendered}
      // region={data.[0].regions}
    />
>>>>>>> feature/homeSelect
    <Footer />
  </div>
);

// == Export
export default App;
