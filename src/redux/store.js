import { createStore,combineReducers } from "redux"
import { reducer } from "./total/reducer"
import {addreducer} from "./add/reducer"

const root = combineReducers({
    total: reducer,
    app:addreducer,
})

export const store=createStore(root)