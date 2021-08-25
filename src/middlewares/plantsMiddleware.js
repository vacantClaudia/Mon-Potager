import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      const regionId = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // dynamiser regionId
      const apiPlantsSchedule = [];
      for (let i = 0; i < regionId.length; i += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?regions=${regionId[i]}`)
          .then((response) => {
            // TODO plus généralement boucler en amont peut être. Si response.data. = semi alors...
            const apiData = response.data;
            apiData.map((data) => {
              // TODO gérer chaque région par un endpoint différent
              // TODO comment appeler plusieurs fois la même plante avec 3
              // TODO date start et end différentes
              // TODO faire une condition. Si date === debut_semi alors
              // TODO tel color, bgColor et borderColor
              // for the moment forget calendarId, maybe we'll change
              // isVisible by endpoint region. Just a test here
              data.calendarId = JSON.stringify(i);
              console.log(data.calendarId);
              data.id = JSON.stringify(data.id);
              // TODO peut être ajouter condition si = "debut_semi" dans la chaine de caractère
              // alors le titre = data.title.rendered + "Semi"
              data.title = data.title.rendered;
              data.category = 'time';
              data.isVisible = false;
              data.body = data.content.rendered;
              // just for testing
              // TODO si semi data.start = data..... etc, si plantation etc...
              data.start = '2021-05-12';
              data.end = '2021-05-25';
              apiPlantsSchedule.push(data);
            });
            // To put api data in plantsSchedules
            const newAction = savePlants(apiPlantsSchedule);
            store.dispatch(newAction);
            console.log(newAction);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }
    default:
  }
  // action to next middleware or reducer
  next(action);
};

export default plantsMiddleware;
