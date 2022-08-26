import { configureStore  } from '@reduxjs/toolkit'
// import productReducer from './productReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = configureStore ({}, composeWithDevTools())

store.subscribe(() => {
    console.log('current state', store.getState());
});

export default store;