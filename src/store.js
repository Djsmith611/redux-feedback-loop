import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

/**
 * redux reducer to contain all user input
 * @param {object} state  object
 * @param {object} action contains type and may contaon payload
 * @returns new state object
 */
const userInput = ( state = {
    feeling:0,
    understanding:0,
    support:0,
    comments:'',
} , action ) => {
    switch (action.type) {
        case 'SET_FEELING':
            return { 
                ...state, 
                feeling: action.payload 
            };
        case 'SET_UNDERSTANDING':
            return { 
                ...state, 
                understanding: action.payload 
            };
        case 'SET_SUPPORT':
            return { 
                ...state, 
                support: action.payload 
            };
        case 'SET_COMMENTS':
            return { 
                ...state, 
                comments: action.payload 
            };
        case 'RESET_INPUT':
            return {
                feeling:0,
                understanding:0,
                support:0,
                comments:'',
            };
        default:
            return state;
    }
};

/**
 * The redux store for this application:
 * - configureStore automatically calls "combineReducers"
 * - logger middleware gives detailed console logs for action calls
 */
const reduxStore = configureStore({
    reducer: {
        userInput
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    }
});

export default reduxStore;