import { createSlice } from "@reduxjs/toolkit";

const initialState =({
    token: '',
    firstName: '',
    lastName: null,
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
    
            // state.isAuth = true;
        },

        //  userLogin(state, action) {
        //     state.isAuth = action.payload
        // },

        // updateUser(state , action) {
        //     state.firstName = action.payload.firstName;
        //     state.lastName = action.payload.lastNamen;
        // },

        // changerName(state, action) {
        //     state.changeName = action.payload.changeName
        // },


        // logout(state) {
        //     state.email = null;
        //     state.firstName = null;
        //     state.lastName = null;
        //     state.isAuth = null;
        // },
    },
});

export const {setToken, login} = authSlice.actions

export default authSlice.reducer

