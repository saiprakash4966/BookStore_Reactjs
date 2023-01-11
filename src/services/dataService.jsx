import axios from "axios";

const headerConfig = {
    headers: { "x-access-token": localStorage.getItem('token') }
}
export const getBooksList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)
    return response
    
}
export const addToCartApi = (id) =>
{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`,id,headerConfig)
    return response
}
export const getcartBookList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}
export const addToWishlistApi = (id) =>
{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id.product_id}`,id,headerConfig)
    return response
}


