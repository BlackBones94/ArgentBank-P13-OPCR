import React, {useEffect , useState} from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login , setToken, userLogin , updateUser , changerName, logout } from "../store/userSlice";
import { loginUp, recupUser } from "../API/api";


function FormSign()  {

    const dispatch = useDispatch()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    function handleSubmit(e) {
      e.preventDefault()
         const token = loginUp(email, password)
         console.log("dispatch")
        dispatch(setToken(token))
        
         // .then((response) => {
        //    dispatch(authActions.setToken(response.token))
        //    console.log('token',dispatch(authActions.setToken(response.token)))
        //     // navigate('/ProfilPage')
        //     recupUser(response.token)
        //         .then(data => {
        //             dispatch(authActions.updateUser(data.firstName))
        //             dispatch(authActions.updateUser(data.lastName))
        //             console.log('test firstName', dispatch(authActions.updateUser(data.firstName)))
        //             console.log('test lastName',  dispatch(authActions.updateUser(data.lastName)))
        //              if(response.token === '' || response.token === undefined) {
        //                     dispatch(authActions.userLogin(false))
        //                 } else {
        //                     dispatch(authActions.userLogin(true))
        //                     console.log( 'test reussite connexion' ,dispatch(authActions.userLogin(true)))
        //                     navigate('/ProfilPage')
        //                 }
        //         })

                // if(response.token === '' || response.token === undefined) {
                //     dispatch(authActions.userLogin(false))
                // } else {
                //     dispatch(authActions.userLogin(true))
                //     console.log( 'test reussite connexion' ,dispatch(authActions.userLogin(true)))
                //     navigate('/ProfilPage')
                // }
   
          
    }
    // const BASE_URL = "http://localhost:3001/api/v1/user/";

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.querySelector('#email').value;
    //     const password = form.querySelector('#password').value;

    //     axios
    //         .post(BASE_URL + 'login', {
    //             email,
    //             password,
    //         }) 
    //         .then((response) => {
    //             dispatch(authActions.setToken(response.data.body));

    //             axios
    //                 .post(
    //                     'http://localhost:3001/api/v1/user/profile',{},
    //                     {headers: {Authorization: `Bearer ${response.data.body.token}`}},
    //                 )
    //                 .then((response) => {
    //                     dispatch(authActions.login(response.data.body));

    //                     navigate('/ProfilPage');

    //                 });
    //                 console.log('Voici le token:',  authActions.setToken(response.data.body.token));


    //         })

    //         // .catch((err) => {
    //         //     alert(err.response.data.message)
    //         // });
    // };


    return(
        <form onSubmit={handleSubmit}>
            <div class="input-wrapper">
                <label htmlfor="username">Username</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div class="input-wrapper">
                <label htmlfor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div class="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button" type="submit">Sign In</button>
      </form>
      
    )
}

export default FormSign;