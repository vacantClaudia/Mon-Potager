import axios from 'axios';

import {
  SUBMIT_LOGIN,
  // connectUser,
  saveUserData,
  // userPlants
} from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
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
          console.log(response.data);
          // store.dispatch(connectUser(response.data.user_display_name));
          const newAction = saveUserData(
            response.data.token,
            response.data.user_display_name,
            response.data.logged,
          );
          store.dispatch(newAction);
          // store.dispatch(userPlants());
        })
        .catch((error) => {
          // TODO message d'erreur
          alert('failed connection');
          console.log(error);
        });
      break;
    }

    // case USER_PLANTS:
    //   // console.log('on va aller chercher les recettes préférées');

    //   // on envoie le token : dans le header Authorization, en précisant le mot
    //   // "Bearer" avant le token
    //   axios.post(
    //     // URL
    //     'http://userPlants',
    //     // données
    //     {},
    //     // options, notamment les headers
    //     {
    //       headers: {
    //         Authorization: `Bearer ${store.getState().auth.token}`,
    //       },
    //     },
    //   )
    //     .then((response) => {
    //       // console.log(response);
    //       store.dispatch(saveUserPLants(response.data.userPlants));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;

    default:
  }
  // on passe l'action au suivant : le middleware suivant s'il y en un, sinon le
  // reducer
  next(action);
};

export default authMiddleware;
