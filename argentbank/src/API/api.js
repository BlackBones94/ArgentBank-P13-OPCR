import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export  async function loginUp(email, password) {
    const dataUser =  {
        email: email,
        password: password,
    }
        const token = await
        axios.post(`${API_URL}/user/login` , dataUser)
            .then(data => {
               console.log(data.data.body)
                return  (data.data.body)
               
            })
            .catch((err) => {
                alert(err.message)
            })
            return token 
}

export async function recupUser(token) {
    console.log(`${API_URL}/user/profile`)
    console.log(token)
    const user = await fetch(`${API_URL}/user/profile` , {method:"post",headers:  {"Content-Type":"application/json", Authorization: `Bearer ${token}` }})
    .then(data => {
        return data.json()
    })
        // const config = {headers:  {"Content-Type":"application/json", Authorization: `Bearer ${token}`}}
        // const user = await axios.post("http://localhost:3001/api/v1/user/profile" , config).then(data => {
        //         console.log('test recup', data.data.body)
        //         return  (data.data.body)
        //     })
        //     .catch((err) => {
        //         alert(err.message)
        //     })
            return user
}


export  async function modifUser(token , firstName , lastName) {
    const dataUser = {
        firstName: firstName,
        lastName: lastName,
    }

        const modif = await
        axios.put(`${API_URL}/user/profile`, dataUser, {headers: {Authorization: `Bearer ${token}`}})
            .then(data => {
                // console.log(data.data.body)
                return (data.data.body)
            })
            .catch((err) => {
                alert(err.message)
            })
            return modif
}