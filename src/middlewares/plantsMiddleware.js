import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const regionId = '';

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante=${regionId}`, {
      })
        .then((response) => {
          const apiData = response.data;
          apiData.map((data) => {
            // TODO gérer chaque région par un endpoint différent
            // TODO comment appeler plusieurs fois la même plante avec 3
            // TODO date start et end différentes
            // TODO faire une condition. Si date === debut_semi alors
            // TODO tel color, bgColor et borderColor
            // for the moment forget calendarId, maybe we'll change
            // isVisible by endpoint region. Just a test here
            data.calendarId = '0';
            data.id = JSON.stringify(data.id);
            // TODO peut être ajouter condition si = "debut_semi" dans la chaine de caractère
            // alors le titre = data.title.rendered + "Semi"
            data.title = data.title.rendered;
            data.category = 'time';
            data.isVisible = false;
            data.body = data.content.rendered;
            // just for testing
            data.start = '2021-05-12';
            data.end = '2021-05-25';
          });
          // To put api data in plantsSchedules
          const newAction = savePlants(apiData);
          store.dispatch(newAction);
          // console.log(newAction);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  // action to next middleware or reducer
  next(action);
};

export default plantsMiddleware;
