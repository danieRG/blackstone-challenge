import { types } from "../types/types";

const initialState = {
    alert:{
        message: '',
        open: false,
    }
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetAlertOpen:
            return {
                ...state,
                alert: action.payload
            }

        default:
            return state
    }
}