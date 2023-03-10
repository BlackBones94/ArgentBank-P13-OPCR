import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../store/userSlice'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = configureStore(
  {
    reducer:{
      auth: authSlice.reducer, 
    },
    composeWithDevTools
  });


export default store;