import { types } from "../types/types";

const initialState = {
    tweets: [],
    terms:[]
}

export const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tweetsAddTerm:
            return {
                ...state,
                terms: [...state.terms, action.payload]
            }
        case types.tweetsRemoveTerm:
            return {
                ...state,
                terms: action.payload
            }
        case types.tweetsAddTweet:
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            }
        default:
            return state
    }
}