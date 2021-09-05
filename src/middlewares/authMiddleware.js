import axios from 'axios';

import {
  SUBMIT_LOGIN,
  saveUserData,
  SUBMIT_REGISTER,
  saveUserRegister,
} from '../actions/auth';
import {
  FETCH_USER_PLANTS, ADD_PLANT, saveUserPlants, saveNewPlant,
} from '../actions/userCalendar';

const authMiddleware = (store) => (next) => (action) => {
  const { plant } = store.getState().userCalendar;
  // console.log('on est dans le middleware, action');
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // console.log('on va envoyer la requête');

      // on va piocher dans le state les infos nécessaires
      const { userName, password } = store.getState().auth;

      axios.post(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/jwt-auth/v1/token',
        // paramètres
        {
          username: userName,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response.data);
          const newAction = saveUserData(
            response.data.token,
            response.data.user_display_name,
            response.data.logged,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          // TODO message d'erreur
          alert('failed connection');
          console.log('error connexion', error);
        });
      break;
    }
    case FETCH_USER_PLANTS:
      // TODO j'ai l'impression que l'action passe 2 fois : pourquoi
      // on envoie le token : dans le header Authorization, en précisant le mot
      // "Bearer" avant le token
      axios.get(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-select',
        // données
        {
        },
        // options, notamment les headers
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          // TODO userPlants devient une string vide car userPlants
          // TODO du reducer prend la valeur de respose.data qui est une string vide
          console.log('middleware response plantation select', response);
          const apiDataUser = response.data;
          const newAction = saveUserPlants(apiDataUser);
          store.dispatch(newAction);
          console.log('middleware newAction plantation select', newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation select', error);
        });
      break;
    case ADD_PLANT:
      axios.post(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-save',
        // données
        {
          // TODO voir s'il faut retravailler ces données
          id_plante: plant.id,
          id: plant.id,
          calendarId: plant.calendarId,
          title: plant.title,
          start: plant.start,
          end: plant.end,
          color: plant.color,
          bgColor: plant.bgColor,
          dragBgColor: plant.dragBgColor,
          borderColor: plant.borderColor,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          console.log('middleware plant plantation save from state', plant);
          console.log('middleware response.data plantation save', response.data);
          // TODO tester de boucler sur response.data et transmettre ex data.id = userPlants.id;
          const newPlant = [response.data];
          // eslint-disable-next-line array-callback-return
          newPlant.map((data) => {
            data.id_plante = plant.id;
            data.id = plant.id;
            data.calendarId = plant.calendarId;
            data.title = plant.title;
            data.start = plant.start;
            data.end = plant.end;
            data.color = plant.color;
            data.bgColor = plant.bgColor;
            data.dragBgColor = plant.dragBgColor;
            data.borderColor = plant.borderColor;
          });
          console.log('middleware new Plant plantation save', newPlant);
          // TODO peut être à retravailler
          const newAction = saveNewPlant(...newPlant);
          store.dispatch(newAction);
          console.log('middleware newAction plantation save', newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation save', error);
        });
      break;
    case SUBMIT_REGISTER: {
      // console.log('on va envoyer la requête');

      // on va piocher dans le state les infos nécessaires
      const {
        username,
        password,
        confirmPassword,
        email,
        region,
      } = store.getState().register;

      axios.post(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/inscription',
        // paramètres
        {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          email: email,
          region: region,
        },
      )
        .then((response) => {
          // console.log(response);
          const newAction = saveUserRegister(
            response.data.token,
            // console.log(response.data.token),
            response.data.user_display_name,
            response.data.signed,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          // TODO message d'erreur
          // alert('failed register');
          console.log('error inscription', error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default authMiddleware;
