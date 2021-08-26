import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
      const apiPlantsSchedule = [];
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?regions=${regionId[calendarId]}`)
          .then((response) => {
            // push 3 times a plant to display 3 differents periods (semi, plantation, récolte)
            for (let periodIndex = 0; periodIndex < 3; periodIndex += 1) {
              const apiData = response.data;
              // console.log(apiData);
              apiData.map((data) => {
                // condition each loop differents periods and colors
                if (periodIndex === 0) {
                  // Semi period
                  data.calendarId = regionId[calendarId];
                  data.id = JSON.stringify(data.id);
                  data.title = data.title.rendered;
                  data.category = 'time';
                  data.isVisible = false;
                  data.body = data.content.rendered;
                  // just for testing start and end
                  data.start = '2021-05-12';
                  data.end = '2021-05-25';
                  data.color = '#474647';
                  data.bgColor = '#f3c465';
                  data.borderColor = '#fad689';
                  apiPlantsSchedule.push(data);
                }
                if (periodIndex === 1) {
                  // Plantation period
                  data.calendarId = regionId[calendarId];
                  data.id = JSON.stringify(data.id);
                  data.title = data.slug; // TODO trouver un moyen d'utiliser data.title.rendered
                  data.category = 'time';
                  data.isVisible = false;
                  data.body = data.content.rendered;
                  // just for testing
                  data.start = '2021-06-12';
                  data.end = '2021-06-25';
                  data.color = '#474647';
                  data.bgColor = '#9ed2bf';
                  data.borderColor = '#daece5';
                  apiPlantsSchedule.push(data);
                }
                if (periodIndex === 2) {
                  // Recolte period
                  data.calendarId = regionId[calendarId];
                  data.id = JSON.stringify(data.id);
                  data.title = data.slug; // TODO trouver un moyen d'utiliser data.title.rendered
                  data.category = 'time';
                  data.isVisible = false;
                  data.body = data.content.rendered;
                  // just for testing
                  data.start = '2021-07-12';
                  data.end = '2021-07-25';
                  data.color = '#fad689';
                  data.bgColor = '#f46d5f';
                  data.borderColor = '#f8cba9';
                  apiPlantsSchedule.push(data);
                }
              });
            }
            // To put api data in plantsSchedules
            const newAction = savePlants(apiPlantsSchedule);
            store.dispatch(newAction);
            // console.log(newAction);
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
