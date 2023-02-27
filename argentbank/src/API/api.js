import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export  function loginUp(email, password) {
    const dataUser =  {
        email: email,
        password: password,
    }

        axios.post(`${API_URL}/user/login` , dataUser)
            .then(data => {
               console.log(data.data.body)
                return  (data.data.body)
               
            })
            .catch((err) => {
                alert(err.message)
            })
}

export  function recupUser(token) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/user/profile` , {} , {headers: {Authorization: `Bearer ${token}`}})
            .then(data => {
                resolve(data.data.body)
            })
            .catch((err) => {
                resolve('')
                alert(err.message)
            })
    })
}


export function modifUser(token , firstName , lastName) {
    const dataUser = {
        firstName: firstName,
        lastName: lastName
    }

    return new Promise((resolve, reject) => {
        axios.put(`${API_URL}/user/profile`, dataUser, {headers: {Authorization: `Bearer ${token}`}})
            .then(data => {
                resolve(data.data.body)
            })
            .catch((err) => {
                resolve("")
                alert(err.message)
            })
    })
}