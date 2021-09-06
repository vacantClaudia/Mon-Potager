import axios from 'axios';

import {
  SUBMIT_LOGIN,
  saveUserData,
  SUBMIT_REGISTER,
  saveUserRegister,
} from '../actions/auth';
import {
  FETCH_USER_PLANTS, ADD_PLANT, saveUserPlants, saveNewPlant, DELETE_PLANT, plantToDelete,
} from '../actions/userCalendar';

const authMiddleware = (store) => (next) => (action) => {
  const { plant } = store.getState().userCalendar;
  const { plantSelected } = store.getState().userCalendar;
  switch (action.type) {
    case SUBMIT_LOGIN: {
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
          const newAction = saveUserData(
            response.data.token,
            response.data.user_display_name,
            response.data.logged,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('error connexion', error);
        });
      break;
    }
    case FETCH_USER_PLANTS:
      // console.log('middleware fetch user plants auth', store.getState().auth);
      // on envoie le token : dans le header Authorization, en précisant le mot
      // "Bearer" avant le token
      axios.get(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-select',
        // options, notamment les headers
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          // console.log('middleware response plantation select', response);
          const apiDataUser = response.data.plantations;
          apiDataUser.map((data) => {
            data.id = data.id_plantation;
          });
          const newAction = saveUserPlants(apiDataUser);
          store.dispatch(newAction);
          // console.log('middleware newAction plantation select', newAction);
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
          id_plante: Math.floor(Math.random() * 1000000),
          calendarId: plant.calendarId,
          category: 'time',
          title: plant.title,
          start: JSON.stringify(plant.start).slice(10, 20),
          end: JSON.stringify(plant.end).slice(10, 20),
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
          // console.log('middleware plant plantation save from state', plant);
          // console.log('middleware response plantation save', response);
          const newPlant = [response.data];
          newPlant.map((data) => {
            data.id = data.id_plante;
          });
          // console.log('middleware new Plant plantation save', newPlant);
          const newAction = saveNewPlant(...newPlant);
          store.dispatch(newAction);
          // console.log('middleware newAction plantation save', newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation save', error);
        });
      break;
    case DELETE_PLANT:
      axios.post(
        // URL
        'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/monpotager/v1/plantation-delete',
        // données
        {
          // TODO voir s'il faut retravailler ces données
          id_plantation: plantSelected.id,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          // console.log('middleware plantToRemove plantation delete from state', plantSelected);
          // console.log('middleware response plantation delete', response);
          const plantRemoved = response.data;
          // console.log('middleware plantRemoved plantation delete', plantRemoved);
          const newAction = plantToDelete(plantRemoved);
          store.dispatch(newAction);
          // console.log('middleware newAction plantation delete', newAction);
        })
        .catch((error) => {
          console.log('middleware error plantation save', error);
        });
      break;
    case SUBMIT_REGISTER: {
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
          console.log(response);
          const newAction = saveUserRegister(
            response.data.token,
            // console.log(response.data.token),
            response.data.user_display_name,
            response.data.signed,
          );
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log('error inscription', error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default authMiddleware;
