import { configureStore, applyMiddleWare } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const userInput = ( state = {
    feeling:0,
    comprehension:0,
    support:0,
    comments:'',
} , action ) => {
    switch (action.type) {
        case 'SET_FEELING':
            return { 
                ...state, 
                feeling: action.payload 
            };
        case 'SET_COMPREHENSION':
            return { 
                ...state, 
                comprehension: action.payload 
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
                comprehension:0,
                support:0,
                comments:'',
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        userInput
    },
    middleware: [applyMiddleWare(logger)]
});

export default store;