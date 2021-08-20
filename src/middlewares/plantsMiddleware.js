import axios from 'axios';

const plantsMiddleware = (store) => (next) => (action) => {
  // axios.get('http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante')
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

export default plantsMiddleware;
