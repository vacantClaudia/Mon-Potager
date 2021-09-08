import { connect } from 'react-redux';

// import component
import App from 'src/components/App';
// import actions creators
import {
  fetchPlants,
} from 'src/actions/visitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchPlants: () => {
    const action = fetchPlants();
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(App);
