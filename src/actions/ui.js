import { types } from "../types/types";

export const setAlertOpen = (message) => {
    return {
        type: types.uiSetAlertOpen,
        payload: {
            message: message,
            open: true,
        }
    }
}

export const setAlertClose = () => {
    return {
        type: types.uiSetAlertOpen,
        payload: {
            message: '',
            open: false,
        }
    }
}