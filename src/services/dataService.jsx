import axios from "axios";

const headerConfig = {
    Authorization : localStorage.getItem("token")
}
export const getBooksList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)
    return response
    
}