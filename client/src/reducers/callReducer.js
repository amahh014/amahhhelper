import {
    GET_CALLS,
    ADD_CALL,
    DELETE_CALL,
    CALLS_LOADING
  } from '../actions/types';
  
  const initialState = {
    calls: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CALLS:
        return {
          ...state,
          calls: action.payload,
          loading: false
        };
      case DELETE_CALL:
        return {
          ...state,
          calls: state.calls.filter(call => call._id !== action.payload)
        };
      case ADD_CALL:
        return {
          ...state,
          calls: [action.payload, ...state.calls]
        };
      case CALLS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  