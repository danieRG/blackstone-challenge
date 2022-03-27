import { types } from "../types/types";

export const addTermAction = (term) => ({
    type: types.tweetsAddTerm,
    payload: term,
})