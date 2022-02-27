import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer } from "./Movies/reducer";
import { cinemasReducer } from "./cinemas/cinemasReducer";
import { bookReducer } from "./BookSingleM/bookReducer";
import { paymentReducer } from "./payment/reducer"

const rootReducer = combineReducers({
  app: reducer,
  theators: cinemasReducer,
  book: bookReducer,
  payment: paymentReducer
})
const logger = store => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))
export { store }