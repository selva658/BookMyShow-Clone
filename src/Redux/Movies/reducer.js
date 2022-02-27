import React from "react";
import {
  GET_MOVIES_FAILUREM,
  GET_MOVIES_REQUESTM,
  GET_MOVIES_SUCCESSM,
} from "./actionTypes";

const initState = {
  movies_data: [],
}

export const reducer = (state=initState,{type, payload})=>{
   console.log(payload)
  switch (type) {
          case GET_MOVIES_REQUESTM: {
              return {
                  ...state,
                  isLoading: true
              }
          }
          case GET_MOVIES_SUCCESSM: {
            console.log(state.movies_data)
              return {
                  ...state,
                  movies_data: payload,
                  isLoading: false
              }
          }
          case GET_MOVIES_FAILUREM: {
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