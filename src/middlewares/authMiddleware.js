import axios from 'axios';

import { SUBMIT_LOGIN, connectUser } from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on est dans le middleware, action');

  if (action.type === SUBMIT_LOGIN) {
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
        // console.log(response);
        store.dispatch(connectUser(response.data.user_display_name));
      })
      .catch((error) => {
        // TODO message d'erreur
        alert('failed connection');
        console.log(error);
      });
  }

  // on passe l'action au suivant : le middleware suivant s'il y en un, sinon le
  // reducer
  next(action);
};

export default authMiddleware;
