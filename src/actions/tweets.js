import { types } from "../types/types";

export const addTermAction = (term) => ({
    type: types.tweetsAddTerm,
    payload: term,
})

export const removeTermAction = (newArr) => ({
    type: types.tweetsRemoveTerm,
    payload: newArr,
})

export const addTweetsAction = (tweets) => ({
    type: types.tweetsAddTweet,
    payload: tweets,
})
