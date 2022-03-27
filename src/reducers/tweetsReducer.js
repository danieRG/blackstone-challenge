import { types } from "../types/types";

const initialState = {
    tweets: [],
    terms:[],
    searchTerm: ""
}

export const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tweetsAddTerm:
            return {
                ...state,
                terms: [...state.terms, action.payload]
            }
        case types.tweetsAddTweet:
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            }
        case types.tweetsUpdateSearchTerm:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }
}