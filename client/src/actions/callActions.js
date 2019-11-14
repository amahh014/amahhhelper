import axios from 'axios';
import { GET_CALLS, ADD_CALL, DELETE_CALL, CALLS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getCalls = () => dispatch => {
  dispatch(setCallsLoading());
  axios
    .get('/api/calls')
    .then(res =>
      dispatch({
        type: GET_CALLS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addCall = call => (dispatch, getState) => {
  axios
    .post('/api/calls', call, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_CALL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteCall = id => (dispatch, getState) => {
  axios
    .delete(`/api/calls/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_CALL,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setCallsLoading = () => {
  return {
    type: CALLS_LOADING
  };
};
