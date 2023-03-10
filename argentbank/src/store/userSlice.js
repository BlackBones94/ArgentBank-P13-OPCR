import { createSlice } from "@reduxjs/toolkit";

const initialState =({
    token: '',
    firstName: '',
    lastName: '',
    email: null,
    password: null,
    isAuth: false,
    changeName:0,
});


export const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
                      
        
        login(state , action) {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },

        setToken: (state , action)  => {
            state.token = action.payload.token;
        },

         userLogin(state, action) {
            state.isAuth = action.payload
        },

        updateFirstName:(state , action) => {
            state.firstName = action.payload;
        },
        
        updateLastName:(state, action) => {
            state.lastName = action.payload;
        },

        changerName(state, action) {
            state.changeName = action.payload;
        },


        logout: (state) => {
            state.token = null;
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.isAuth = null;
        },
    },
});

export const {setToken, login, userLogin, updateFirstName, updateLastName, logout , changerName} = authSlice.actions

export default authSlice.reducer

