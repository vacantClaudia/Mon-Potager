/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import { FETCH_PLANTS, savePlants } from '../actions/visitorCalendar';

const regionId = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']; // dynamiser regionId si on a le temps
const plantsMiddleware = (store) => (next) => (action) => {
  const apiPlants = []; // plants from api loop to iterate regions
  switch (action.type) {
    case FETCH_PLANTS: {
      // loop by region
      for (let calendarId = 0; calendarId < regionId.length; calendarId += 1) {
        axios.get(`http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante?_embed=true&per_page=100&regions=${regionId[calendarId]}`)
          .then((response) => {
            const apiData = response.data;
            // eslint-disable-next-line array-callback-return
            apiData.map((plant) => {
              plant.calendarId = regionId[calendarId];
              plant.id = JSON.stringify(plant.id);
              plant.title = plant.title.rendered;
              plant.category = 'time';
              plant.isVisible = false;
              apiPlants.push(plant);
            });
            // TODO : fix bug - plant with no date display on today

            // apiPlants deep clone - get data by semi period
            const semiPlants = JSON.parse(JSON.stringify(apiPlants));

            // eslint-disable-next-line array-callback-return
            semiPlants.map((semi) => {
              if (semi.calendarId === '6') {
                semi.start = semi.periode_regions.debut_semi_auvergne[0];
                semi.end = semi.periode_regions.fin_semi_auvergne[0];
                semi.month = semi.periode_regions['debut_semi-month_auvergne'];
              }
              else if (semi.calendarId === '7') {
                semi.start = semi.periode_regions.debut_semi_bourgogne[0];
                semi.end = semi.periode_regions.fin_semi_bourgogne[0];
                semi.month = semi.periode_regions['debut_semi-month_bourgogne'];
              }
              else if (semi.calendarId === '8') {
                semi.start = semi.periode_regions.debut_semi_bretagne[0];
                semi.end = semi.periode_regions.fin_semi_bretagne[0];
                semi.month = semi.periode_regions['debut_semi-month_bretagne'];
              }
              else if (semi.calendarId === '9') {
                semi.start = semi.periode_regions.debut_semi_centre[0];
                semi.end = semi.periode_regions.fin_semi_centre[0];
                semi.month = semi.periode_regions['debut_semi-month_centre'];
              }
              else if (semi.calendarId === '10') {
                semi.start = semi.periode_regions.debut_semi_corse[0];
                semi.end = semi.periode_regions.fin_semi_corse[0];
                semi.month = semi.periode_regions['debut_semi-month_corse'];
              }
              else if (semi.calendarId === '11') {
                semi.start = semi.periode_regions.debut_semi_est[0];
                semi.end = semi.periode_regions.fin_semi_est[0];
                semi.month = semi.periode_regions['debut_semi-month_est'];
              }
              else if (semi.calendarId === '12') {
                semi.start = semi.periode_regions.debut_semi_hauts[0];
                semi.end = semi.periode_regions.fin_semi_hauts[0];
                semi.month = semi.periode_regions['debut_semi-month_hauts'];
              }
              else if (semi.calendarId === '13') {
                semi.start = semi.periode_regions.debut_semi_ile[0];
                semi.end = semi.periode_regions.fin_semi_ile[0];
                semi.month = semi.periode_regions['debut_semi-month_ile'];
              }
              else if (semi.calendarId === '14') {
                semi.start = semi.periode_regions.debut_semi_normandie[0];
                semi.end = semi.periode_regions.fin_semi_normandie[0];
                semi.month = semi.periode_regions['debut_semi-month_normandie'];
              }
              else if (semi.calendarId === '15') {
                semi.start = semi.periode_regions.debut_semi_aquitaine[0];
                semi.end = semi.periode_regions.fin_semi_aquitaine[0];
                semi.month = semi.periode_regions['debut_semi-month_aquitaine'];
              }
              else if (semi.calendarId === '16') {
                semi.start = semi.periode_regions.debut_semi_occitanie[0];
                semi.end = semi.periode_regions.fin_semi_occitanie[0];
                semi.month = semi.periode_regions['debut_semi-month_occitanie'];
              }
              else if (semi.calendarId === '17') {
                semi.start = semi.periode_regions.debut_semi_loire[0];
                semi.end = semi.periode_regions.fin_semi_loire[0];
                semi.month = semi.periode_regions['debut_semi-month_loire'];
              }
              else if (semi.calendarId === '18') {
                semi.start = semi.periode_regions.debut_semi_azur[0];
                semi.end = semi.periode_regions.fin_semi_azur[0];
                semi.month = semi.periode_regions['debut_semi-month_azur'];
              }
              semi.period = 'semi';
              semi.color = '#474647';
              semi.bgColor = '#f3c465';
              semi.borderColor = '#fad689';
            });

            // apiPlants deep clone - get data by plantation period
            const plantationPlants = JSON.parse(JSON.stringify(apiPlants));

            // eslint-disable-next-line array-callback-return
            plantationPlants.map((plant) => {
              if (plant.calendarId === '6') {
                plant.start = plant.periode_regions.debut_plant_auvergne[0];
                plant.end = plant.periode_regions.fin_plant_auvergne[0];
                plant.month = plant.periode_regions['debut_plant-month_auvergne'];
              }
              else if (plant.calendarId === '7') {
                plant.start = plant.periode_regions.debut_plant_bourgogne[0];
                plant.end = plant.periode_regions.fin_plant_bourgogne[0];
                plant.month = plant.periode_regions['debut_plant-month_bourgogne'];
              }
              else if (plant.calendarId === '8') {
                plant.start = plant.periode_regions.debut_plant_bretagne[0];
                plant.end = plant.periode_regions.fin_plant_bretagne[0];
                plant.month = plant.periode_regions['debut_plant-month_bretagne'];
              }
              else if (plant.calendarId === '9') {
                plant.start = plant.periode_regions.debut_plant_centre[0];
                plant.end = plant.periode_regions.fin_plant_centre[0];
                plant.month = plant.periode_regions['debut_plant-month_centre'];
              }
              else if (plant.calendarId === '10') {
                plant.start = plant.periode_regions.debut_plant_corse[0];
                plant.end = plant.periode_regions.fin_plant_corse[0];
                plant.month = plant.periode_regions['debut_plant-month_corse'];
              }
              else if (plant.calendarId === '11') {
                plant.start = plant.periode_regions.debut_plant_est[0];
                plant.end = plant.periode_regions.fin_plant_est[0];
                plant.month = plant.periode_regions['debut_plant-month_est'];
              }
              else if (plant.calendarId === '12') {
                plant.start = plant.periode_regions.debut_plant_hauts[0];
                plant.end = plant.periode_regions.fin_plant_hauts[0];
                plant.month = plant.periode_regions['debut_plant-month_hauts'];
              }
              else if (plant.calendarId === '13') {
                plant.start = plant.periode_regions.debut_plant_ile[0];
                plant.end = plant.periode_regions.fin_plant_ile[0];
                plant.month = plant.periode_regions['debut_plant-month_ile'];
              }
              else if (plant.calendarId === '14') {
                plant.start = plant.periode_regions.debut_plant_normandie[0];
                plant.end = plant.periode_regions.fin_plant_normandie[0];
                plant.month = plant.periode_regions['debut_plant-month_normandie'];
              }
              else if (plant.calendarId === '15') {
                plant.start = plant.periode_regions.debut_plant_aquitaine[0];
                plant.end = plant.periode_regions.fin_plant_aquitaine[0];
                plant.month = plant.periode_regions['debut_plant-month_aquitaine'];
              }
              else if (plant.calendarId === '16') {
                plant.start = plant.periode_regions.debut_plant_occitanie[0];
                plant.end = plant.periode_regions.fin_plant_occitanie[0];
                plant.month = plant.periode_regions['debut_plant-month_occitanie'];
              }
              else if (plant.calendarId === '17') {
                plant.start = plant.periode_regions.debut_plant_loire[0];
                plant.end = plant.periode_regions.fin_plant_loire[0];
                plant.month = plant.periode_regions['debut_plant-month_loire'];
              }
              else if (plant.calendarId === '18') {
                plant.start = plant.periode_regions.debut_plant_azur[0];
                plant.end = plant.periode_regions.fin_plant_azur[0];
                plant.month = plant.periode_regions['debut_plant-month_azur'];
              }
              plant.period = 'plantation';
              plant.color = '#474647';
              plant.bgColor = '#f46d5f';
              plant.borderColor = '#e4bd9f';
            });
            
            // get data by recolte period
            const recoltePlants = JSON.parse(JSON.stringify(apiPlants));

            for (let recolteIndex = 0; recolteIndex < recoltePlants.length; recolteIndex += 1) {
              if (recoltePlants[recolteIndex].calendarId === '6') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_auvergne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_auvergne[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_auvergne'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '7') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_bourgogne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_bourgogne[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_bourgogne'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '8') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_bretagne[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_bretagne[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_bretagne'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '9') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_centre[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_centre[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_centre'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '10') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_corse[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_corse[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_corse'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '11') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_est[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_est[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_est'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '12') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_hauts[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_hauts[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_hauts'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '13') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_ile[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_ile[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_ile'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '14') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_normandie[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_normandie[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_normandie'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '15') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_aquitaine[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_aquitaine[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_aquitaine'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '16') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_occitanie[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_occitanie[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_occitanie'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '17') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_loire[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_loire[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_loire'];
              }
              else if (recoltePlants[recolteIndex].calendarId === '18') {
                recoltePlants[recolteIndex].start = recoltePlants[recolteIndex].periode_regions.debut_recolte_azur[0];
                recoltePlants[recolteIndex].end = recoltePlants[recolteIndex].periode_regions.fin_recolte_azur[0];
                recoltePlants[recolteIndex].month = recoltePlants[recolteIndex].periode_regions['debut_recolte-month_azur'];
              }
              recoltePlants[recolteIndex].period = 'recolte';
              recoltePlants[recolteIndex].color = '#474647';
              recoltePlants[recolteIndex].bgColor = '#9ed2bf';
              recoltePlants[recolteIndex].borderColor = '#daece5';
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
            // console.log(newAction);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
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
