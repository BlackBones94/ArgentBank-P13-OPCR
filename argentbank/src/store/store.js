import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../store/userSlice'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

const store = configureStore(
  {
    reducer:{
      auth: authSlice.reducer, 
    },
    composeWithDevTools
  });

// const store = configureStore({reducer:{auth: authSlice.reducer},devTools:[devToolsEnhancer({realtime:true, port: 8000})],})

export default store;