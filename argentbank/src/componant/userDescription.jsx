import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { modifUser, recupUser } from "../API/api"
import { changerName, updateFirstName, updateLastName, logout } from "../store/userSlice";
import argentBank from '../img/argentBankLogo.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function UserDescription(){

    const {token,firstName, lastName, changeName} = useSelector((state) => state.auth)
    
    const [newFirstName , setNewFirstName] = useState(firstName)
    const [newLastName , setNewLastName] = useState(lastName)

    useEffect(() => {
        setNewFirstName(firstName)
        setNewLastName(lastName)
    }, [firstName, lastName])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function nameUser() {
        recupUser(token)
        dispatch(changerName(changeName+1))
    }
   

    function newName() {
        const modif =  modifUser(token, newFirstName, newLastName)
        console.log(modif)
        modifUser(token, newFirstName, newLastName)
        dispatch(updateFirstName(firstName))
        dispatch(updateLastName(lastName))
        dispatch(changerName(changeName-1))
    }

    function cancelName(){
        recupUser(token)
        dispatch(changerName(changeName-1))
    }

    function signOut() {
        dispatch(logout(''))
        navigate('/sign')
    }


    return(
        <div>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo" >
                    <img
                        className="main-nav-logo-image"
                        src={argentBank}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                    <div>
                         <a className="main-nav-item" href="./user.html">
                        <i className="fa fa-user-circle"></i>
                        {newFirstName}
                        </a>
                        <a onClick={signOut} className="main-nav-item" >
                        <i className="fa fa-sign-out"></i>
                         Sign Out
                        </a>
                    </div>
                </nav>
                
            <div class="header">
                <h1>Welcome back</h1>
                  {(changeName <1)?
                    <>
                        <h1>{newFirstName} {newLastName} !</h1>
                        <button class="edit-button" onClick={nameUser}>Edit Name</button>
                    </>:<>
                        <div className="inputWrapper">
                            <div className="input-box">
                                <label htmlFor=""></label>
                                <input type="text" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} />
                            </div>
                            <div className="input-box">
                                <label htmlFor=""></label>
                                <input type="text" onChange={(e) => setNewLastName(e.target.value)} value={newLastName}/>
                            </div>
                        </div>
                        
                        <div className="buttonWrapper">
                            <div className="box-button">
                                <button className="viewButton" onClick={newName}>Save Name</button>
                            </div>
                            <div className="box-button">
                                <button className="viewButton" onClick={cancelName}>Cancel</button>
                            </div>
                        </div>
                    </> 
                  }
            </div>
        
            <h2 class="sr-only">Accounts</h2>
        </div>
                    )
}

export default UserDescription