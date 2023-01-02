import axios from 'axios';


export const loginApi = (obj) =>
{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",obj)
    return response

}


