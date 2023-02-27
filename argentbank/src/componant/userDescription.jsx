import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { recupUser, modifUser } from "../API/api"
import { authActions } from "../store/userSlice"

function UserDescription(){


const{firstName} = useSelector((state) => state)   
console.log(firstName)

    return(
        <div>
            <div class="header">
                <h1>Welcome back</h1>
                  
                    <h1>Travis</h1>
                    <button class="edit-button"   >Edit Name</button>
                    </div>
        
            <h2 class="sr-only">Accounts</h2>
        </div>
                    )
}

export default UserDescription