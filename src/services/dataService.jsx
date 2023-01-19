import axios from "axios";

const headerConfig = {
    headers: { "x-access-token": localStorage.getItem('token') }
}
export const getBooksList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)
    return response

}
export const addToCartApi = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`,id, headerConfig)
    return response
    
}
export const addToWishlistApi = (id) =>
{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id.product_id}`,id,headerConfig)
    return response
}
export const UpdateCartApi = (id,input) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,input, headerConfig)
    return response
    
}
export const putAddress = (id) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, id, headerConfig)
    return response
    
}

export const addToOrder = (inputobj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`, inputobj, headerConfig)
    return response
  
}
export const RemoveBookFromCart = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, headerConfig);
    return response;
    
}

export const cartItemListApi = () =>
{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}
export const getWishList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', headerConfig)
    return response
}
export const removeWishListItem = (wishlistObj) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${wishlistObj.id}`, headerConfig)
    return response
}


