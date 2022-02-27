import {
  GET_MOVIES_FAILUREM,
  GET_MOVIES_REQUESTM,
  GET_MOVIES_SUCCESSM
} from "./actionTypes";
import axios from "axios";
// import { dispatch } from "react-redux";
// GET_OUTDOOR_EVENTS_FAILURE,
// GET_OUTDOOR_EVENTS_REQUEST,
// GET_OUTDOOR_EVENTS_SUCCESS,
// GET_POPULAR_EVENTS_FAILURE,
// GET_POPULAR_EVENTS_REQUEST,
// GET_POPULAR_EVENTS_SUCCESS
// GET_LATEST_EVENTS_FAILURE,
// GET_LATEST_EVENTS_REQUEST,
// GET_LATEST_EVENTS_SUCCESS,
// GET_LAUGHTER_EVENTS_FAILURE,
// GET_LAUGHTER_EVENTS_REQUEST,
// GET_LAUGHTER_EVENTS_SUCCESS,

// GET MOVIES-----------------------------------

const getMoviesRequestM = () => {
  return {
    type: GET_MOVIES_REQUESTM
  };
};
const getMoviesSuccessM = (payload) => {
  return {
    type: GET_MOVIES_SUCCESSM,
    payload
  };
};
const getMoviesFailureM = (error) => {
  return {
    type: GET_MOVIES_FAILUREM,
    error
  };
};

export const getMovies = () => (dispatch) => {
  // dispatch(getMoviesRequest);
  return axios.get("https://bookmyshow-backend-pavan.herokuapp.com/movies",{
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }
)
    .then((res) => {
      console.log(res.data), dispatch(getMoviesSuccessM(res.data));
    })
    .catch((error) => console.log(error));
};
