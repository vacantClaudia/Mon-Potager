import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?regions=${regionId[calendarId]}`)
          .then((response) => {
            const apiSemiData = response.data;
            const apiPlantationData = response.data;
            const apiRecolteData = response.data;
            // console.log(apiData);
            apiSemiData.map((data) => {
              // condition each loop differents periods and colors
              // Semi period
              data.calendarId = regionId[calendarId];
              data.id = JSON.stringify(data.id);
              data.title = data.slug; // TODO trouver un moyen d'utiliser data.title.rendered
              data.category = 'time';
              data.isVisible = false;
              data.body = data.content.rendered;
              // just for testing start and end
              data.start = '2021-05-12';
              data.end = '2021-05-25';
              data.color = '#474647';
              data.bgColor = '#f3c465';
              data.borderColor = '#fad689';
              apiSemiData.push(data);
              console.log(apiSemiData);
            });
            apiPlantationData.map((data) => {
              // condition each loop differents periods and colors
              // Semi period
              data.calendarId = regionId[calendarId];
              data.id = JSON.stringify(data.id);
              data.title = data.slug; // TODO trouver un moyen d'utiliser data.title.rendered
              data.category = 'time';
              data.isVisible = false;
              data.body = data.content.rendered;
              // just for testing start and end
              data.start = '2021-06-12';
              data.end = '2021-06-25';
              data.color = '#474647';
              data.bgColor = '#f3c465';
              data.borderColor = '#f8cba9';
              apiPlantationData.push(data);
              // console.log(apiPlantationData);
            });
            apiRecolteData.map((data) => {
            // condition each loop differents periods and colors
              // Semi period
              data.calendarId = regionId[calendarId];
              data.id = JSON.stringify(data.id);
              data.title = data.slug; // TODO trouver un moyen d'utiliser data.title.rendered
              data.category = 'time';
              data.isVisible = false;
              data.body = data.content.rendered;
              // just for testing start and end
              data.start = '2021-07-12';
              data.end = '2021-07-25';
              data.color = '#474647';
              data.bgColor = '#9ed2bf';
              data.borderColor = '#daece5';
              apiRecolteData.push(data);
              // console.log(apiRecolteData);
            });
            const apiPlantsSchedule = [
              ...apiSemiData,
              ...apiPlantationData,
              ...apiRecolteData,
            ];
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
