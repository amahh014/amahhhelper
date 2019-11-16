import axios from 'axios';
import { GET_PLACES, ADD_PLACE, DELETE_PLACE, PLACES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getPlaces = () => dispatch => {
  dispatch(setPlacesLoading());
  axios
    .get('/api/places')
    .then(res =>
      dispatch({
        type: GET_PLACES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addPlace = place => (dispatch, getState) => {
  axios
    .post('/api/places', place, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_PLACE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deletePlace = id => (dispatch, getState) => {
  axios
    .delete(`/api/places/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_PLACE,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setPlacesLoading = () => {
  return {
    type: PLACES_LOADING
  };
};
