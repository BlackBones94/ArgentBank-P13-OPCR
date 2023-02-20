import React from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/userSlice";

const FormSign = () => {

    const BASE_URL = "http://localhost:3001/api/v1/user/";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        axios
            .post(BASE_URL + 'login', {
                email,
                password,
            }) 
            .then((response) => {
                dispatch(authActions.setToken(response.data.body));

                axios
                    .post(
                        'http://localhost:3001/api/v1/user/profile',{},
                        {headers: {Authorization: `Bearer ${response.data.body.token}`}},
                    )
                    .then((response) => {
                        dispatch(authActions.login(response.data.body));

                        navigate('/ProfilPage');

                        console.log(' token: ' + localStorage.data)
                    })
            })

            // .catch((err) => {
            //     alert(err.response.data.message)
            // });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div class="input-wrapper">
                <label htmlfor="username">Username</label>
                <input type="email" id="email" name="email"/>
            </div>
            <div class="input-wrapper">
                <label htmlfor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div class="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button">Sign In</button>
      </form>
      
    )
}

export default FormSign;