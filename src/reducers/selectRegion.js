/* eslint-disable quotes */
/* eslint-disable quote-props */
import { CHANGE_INPUT_VALUE, DISPLAY_PLANTS } from 'src/actions/selectRegion';

const initialState = {
  data: [
    {
      "id": 6,
      "date": "2021-08-19T10:34:12",
      "date_gmt": "2021-08-19T10:34:12",
      "guid": {
        "rendered": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/?post_type=plante&#038;p=6",
      },
      "modified": "2021-08-19T11:42:39",
      "modified_gmt": "2021-08-19T11:42:39",
      "slug": "tomate",
      "status": "publish",
      "type": "plante",
      "link": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/plante/tomate/",
      "title": {
        "rendered": "tomate",
      },
      "content": {
        "rendered": "<p>Je suis une belle tomate</p>\n",
        "protected": false,
      },
      "featured_media": 0,
      "template": "",
      "plante_type": [
        2,
      ],
      "regions": [
        1,
      ],
      "season": [
        4,
      ],
      "_links": {
        "self": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante/6",
          },
        ],
        "collection": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante",
          },
        ],
        "about": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/types/plante",
          },
        ],
        "wp:attachment": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/media?parent=6",
          },
        ],
        "wp:term": [
          {
            "taxonomy": "plante_type",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante_type?post=6",
          },
          {
            "taxonomy": "regions",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/regions?post=6",
          },
          {
            "taxonomy": "season",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/season?post=6",
          },
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true,
          },
        ],
      },
    },
    {
      "id": 7,
      "date": "2021-08-19T10:34:12",
      "date_gmt": "2021-08-19T10:34:12",
      "guid": {
        "rendered": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/?post_type=plante&#038;p=6",
      },
      "modified": "2021-08-19T11:42:39",
      "modified_gmt": "2021-08-19T11:42:39",
      "slug": "tomate",
      "status": "publish",
      "type": "plante",
      "link": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/plante/tomate/",
      "title": {
        "rendered": "salade",
      },
      "content": {
        "rendered": "<p>Je suis une belle tomate</p>\n",
        "protected": false,
      },
      "featured_media": 0,
      "template": "",
      "plante_type": [
        2,
      ],
      "regions": [
        2,
      ],
      "season": [
        4,
      ],
      "_links": {
        "self": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante/6",
          },
        ],
        "collection": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante",
          },
        ],
        "about": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/types/plante",
          },
        ],
        "wp:attachment": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/media?parent=6",
          },
        ],
        "wp:term": [
          {
            "taxonomy": "plante_type",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante_type?post=6",
          },
          {
            "taxonomy": "regions",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/regions?post=6",
          },
          {
            "taxonomy": "season",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/season?post=6",
          },
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true,
          },
        ],
      },
    },
    {
      "id": 8,
      "date": "2021-08-19T10:34:12",
      "date_gmt": "2021-08-19T10:34:12",
      "guid": {
        "rendered": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/?post_type=plante&#038;p=6",
      },
      "modified": "2021-08-19T11:42:39",
      "modified_gmt": "2021-08-19T11:42:39",
      "slug": "tomate",
      "status": "publish",
      "type": "plante",
      "link": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/plante/tomate/",
      "title": {
        "rendered": "oignon",
      },
      "content": {
        "rendered": "<p>Je suis une belle tomate</p>\n",
        "protected": false,
      },
      "featured_media": 0,
      "template": "",
      "plante_type": [
        2,
      ],
      "regions": [
        3,
      ],
      "season": [
        4,
      ],
      "_links": {
        "self": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante/6",
          },
        ],
        "collection": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante",
          },
        ],
        "about": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/types/plante",
          },
        ],
        "wp:attachment": [
          {
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/media?parent=6",
          },
        ],
        "wp:term": [
          {
            "taxonomy": "plante_type",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/plante_type?post=6",
          },
          {
            "taxonomy": "regions",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/regions?post=6",
          },
          {
            "taxonomy": "season",
            "embeddable": true,
            "href": "http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/wp/v2/season?post=6",
          },
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true,
          },
        ],
      },
    },
  ],
  isSelected: false,
};

function selectRegionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
      };

    case DISPLAY_PLANTS:
      return {
        ...state,
        isSelected: !state.isSelected,
      };

    default:
      return state;
  }
}

export default selectRegionReducer;
