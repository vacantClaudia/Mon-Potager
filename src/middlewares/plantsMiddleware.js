import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const plantsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_PLANTS: {
      // console.log('on va envoyer une requête pour récupérer les recettes');
      axios.get('http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante')
        .then((response) => {
          console.log(response);

          // aller placer response.data dans le state
          // => on dispatch une action qui sera traitée par le reducer
          const newAction = savePlants(response.data);
          store.dispatch(newAction);
          console.log(newAction);
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default plantsMiddleware;
