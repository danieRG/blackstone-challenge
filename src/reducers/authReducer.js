import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
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