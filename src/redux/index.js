import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/reducer.js';

export default configureStore({
    reducer: {
        weather: weatherReducer,
    },
});
