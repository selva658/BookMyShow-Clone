import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS
} from "./actionTypes";

import axios from "axios";
// Booking MOVIES-----------------------------------

const getMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST
  };
};
const getMoviesSuccess = (payload) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload
  };
};
const getMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
    error
  };
};

export const BookMovie = (id) => (dispatch) => {
  dispatch(getMoviesRequest());
  return axios.get(`https://bookmyshow-backend-pavan.herokuapp.com/movies/${id}`,{
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }
)
    .then((res) => {
      console.log(res.data), dispatch(getMoviesSuccess(res.data));
    })
    .catch((error) => {console.log(error),dispatch(getMoviesFailure());});
};
