import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import { tweetsReducer } from '../reducers/tweetsReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    tweets: tweetsReducer,
    ui: uiReducer,
})


export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
    )