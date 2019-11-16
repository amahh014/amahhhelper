import {
    GET_PLACES,
    ADD_PLACE,
    DELETE_PLACE,
    PLACES_LOADING
  } from '../actions/types';
  
  const initialState = {
    places: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PLACES:
        return {
          ...state,
          places: action.payload,
          loading: false
        };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => place._id !== action.payload)
        };
      case ADD_PLACE:
        return {
          ...state,
          places: [action.payload, ...state.places]
        };
      case PLACES_LOADING:
        return {
          ...state,
          loading: true 
        };
      default:
        return state;
    }
  }
  