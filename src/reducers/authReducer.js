import { types } from "../types/types";

const initialState = {
    displayName: '',
    loggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                displayName: action.payload,
                loggedIn: true

            }
        case types.logout:
            return {
                displayName: action.payload,
                loggedIn: false
            }
        default:
            return state
    }
}