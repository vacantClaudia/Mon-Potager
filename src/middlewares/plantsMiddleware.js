import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
const apiPlants = []; // plants from api loop to iterate regions

const plantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?regions=${regionId[calendarId]}`)
          .then((response) => {
            const apiData = response.data;
            // eslint-disable-next-line array-callback-return
            apiData.map((plant) => {
              plant.calendarId = regionId[calendarId];
              plant.id = JSON.stringify(plant.id);
              plant.title = plant.slug;
              plant.category = 'time';
              plant.isVisible = false;
              apiPlants.push(plant);
            });

            // get data by semi period
            const semiPlants = JSON.parse(JSON.stringify(apiPlants));

            for (let semiIndex = 0; semiIndex < semiPlants.length; semiIndex += 1) {
              semiPlants[semiIndex].start = '2021-04-12';
              semiPlants[semiIndex].end = '2021-04-25';
              semiPlants[semiIndex].color = '#474647';
              semiPlants[semiIndex].bgColor = '#f3c465';
              semiPlants[semiIndex].borderColor = '#fad689';
            }

            // get data by plantation period
            const plantationPlants = JSON.parse(JSON.stringify(apiPlants));

            for (let semiIndex = 0; semiIndex < plantationPlants.length; semiIndex += 1) {
              plantationPlants[semiIndex].start = '2021-06-12';
              plantationPlants[semiIndex].end = '2021-06-25';
              plantationPlants[semiIndex].color = '#474647';
              plantationPlants[semiIndex].bgColor = '#f46d5f';
              plantationPlants[semiIndex].borderColor = '#e4bd9f';
            }

            // get data by recolte period
            const recoltePlants = JSON.parse(JSON.stringify(apiPlants));

            for (let semiIndex = 0; semiIndex < recoltePlants.length; semiIndex += 1) {
              recoltePlants[semiIndex].start = '2021-07-12';
              recoltePlants[semiIndex].end = '2021-07-25';
              recoltePlants[semiIndex].color = '#474647';
              recoltePlants[semiIndex].bgColor = '#9ed2bf';
              recoltePlants[semiIndex].borderColor = '#daece5';
            }

            const apiPlantsSchedules = [
              ...semiPlants,
              ...plantationPlants,
              ...recoltePlants,
            ];

            // TODO balancer les données au state une que tout est chargé
            // To put api data in plantsSchedules
            const newAction = savePlants(apiPlantsSchedules);
            store.dispatch(newAction);
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
