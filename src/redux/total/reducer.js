import {  ADD_TOTAL } from "./actionType"

const init = {
    total: 0
}

export const reducer = (state=init,action) => {
    switch (action.type) {
        case ADD_TOTAL: return ({ ...state, total: state.total + action.payload })
        
        default : return state
    }
}
