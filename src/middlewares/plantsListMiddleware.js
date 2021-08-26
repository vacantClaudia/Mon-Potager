import axios from 'axios';
import { GET_PLANTS_LIST, savePlantsList } from '../actions/plantsList';

const plantsListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PLANTS_LIST: {
      axios.get('http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?_embed=true')
        .then((response) => {
          // console.log(response);
          const newAction = savePlantsList(response.data);
          store.dispatch(newAction);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default plantsListMiddleware;
