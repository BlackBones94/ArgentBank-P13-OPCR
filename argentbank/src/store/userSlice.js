import { createSlice } from "@reduxjs/toolkit";

const initialState =({
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    isAuth: false,
});


const authSlice = createSlice({
    name: 'auth_slice',
    initialState,
    reducers: {
        login(state , action) {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },

        setToken(state , action) {
            state.token = action.payload.token;
            state.isAuth = true;
        },

        updateUser(state , action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastNamen;
        },

        logout(state) {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.isAuth = null;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;