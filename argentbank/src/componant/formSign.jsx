import React, {useEffect , useState} from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken , login , userLogin, updateFirstName, updateLastName} from "../store/userSlice";
import { loginUp, modifUser, recupUser } from "../API/api";


function FormSign()  {
    const dispatch = useDispatch()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
      e.preventDefault()

        const token = await loginUp(email, password)
        
        console.log("token", token)
        console.log("dispatch")
        dispatch(setToken(token))
       
        if(token === ''  || token === undefined) {
            dispatch(userLogin(false))
           
        } else {
            dispatch(userLogin(true))
            // console.log('test reussite log' , dispatch(userLogin(true)))
            navigate('/ProfilPage')
        }      
        const user = await recupUser(token.token)
        console.log(user)
        dispatch(updateFirstName(user.body.firstName ))
        dispatch(updateLastName(user.body.lastName))
        // console.log( 'testDispatch', dispatch(updateFirstName(user.body.firstName )))
    }

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