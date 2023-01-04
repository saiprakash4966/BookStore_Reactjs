import axios from 'axios';

export const login = (obj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", obj)
    return response
}

export const signup = (obj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", obj)
    return response
}

