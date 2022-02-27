import React from "react";
import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  bookedMovie: {}
}

export const bookReducer = (state=initState,{type, payload})=>{
   console.log(payload)
  switch (type) {
          case GET_MOVIES_REQUEST: {
              return {
                  ...state,
                  isLoading: true
              }
          }
          case GET_MOVIES_SUCCESS: {
            // console.log(state.movies_data)
              return {
                  ...state,
                  bookedMovie: payload,
                  isLoading: false
              }
          }
          case GET_MOVIES_FAILURE: {
              return {
                  ...state,
                  isLoading: false,
                  isError: true
              }
          }
          default:
            return state
  }
}