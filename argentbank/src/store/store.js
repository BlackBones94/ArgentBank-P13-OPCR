import {configureStore} from '@reduxjs/toolkit';
import  authReducer  from './userSlice';

const store = configureStore({
    reducer: authReducer,
});

export default store;