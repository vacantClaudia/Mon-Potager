import axios from 'axios';
import { GET_PLANTS_EVENTS, savePlantsEvents } from 'src/actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  // console.log('on est dans le middleware events');
  switch (action.type) {
    case GET_PLANTS_EVENTS: {
      // console.log('on va envoyer la requête events');

      // on va piocher dans le state les infos nécessaires
      const { selectedRegion } = store.getState().visitorCalendar;

      axios.post(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/event',
        // paramètre
        {
          idRegionSelected: selectedRegion,
        },
      )
        .then((response) => {
          const newAction = savePlantsEvents(
            response.data.semis,
            response.data.plantation,
            response.data.recolte,
            response.data.selectedRegion,
            response.data.selectedPeriod,
          );

          // console.log('response.data', response.data);
          // console.log('response.data.plantation', response.data.plantation);
          // console.log('response.data.recolte', response.data.recolte);
          // console.log('response.data.selectedRegion', response.data.selectedRegion);
          // console.log('response.data.selectedPeriod', response.data.selectedPeriod);
          store.dispatch(newAction);
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

export default eventsMiddleware;
