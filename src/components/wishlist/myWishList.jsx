import './myWishList.css';
import React, { useEffect, useState } from 'react'
import book1 from '../../images/component.png'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../header/header';
import { getWishList, removeWishListItem } from '../../services/dataService';






function MyWishlist(props) {


    const [wishList, setWishList] = useState([])
    const [booklist, setBooklist] = useState([])

    const removeItem = (id) => {
        removeWishListItem(id).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }
    const getWishlist = () => {
        getWishList().then((res) => {
            console.log(res)
            setWishList(res.data.result)
            setBooklist(res.data.result)
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log("Getting cart data")
    }

    console.log(wishList)

    useEffect(() => {
        getWishlist()
    }, [])




    return (
        <div>
            <Box>
                <Header />
                <Box className='headerwishlist'>

                </Box>
                <Box className='containerwish'>
                    <Box className='mainwishlist'>
                        <Box className='detilswishlist'>
                            <span>My Wishlist (02)</span>
                        </Box>
                    </Box>
                    {booklist.map((book) =>
                    (
                        <Box className='bookdetailwish' >
                            <Box className='bookcontentwish'>
                                <Box className='imagewish'>
                                    <Box className='imagebookwish'>
                                        <img src={book1} width='100%' />
                                    </Box>
                                    <Box className='booknamewish'>
                                        <Box className='booktitlewish'>
                                            <Box>

                                                Dont Make Me Think
                                            </Box>
                                        </Box>
                                        <Box className='bookAuthorwish'><span>by Saiprakash</span></Box>
                                        <Box className='bookpricewish'>
                                            <Box className='discountwish'>Rs.500 </Box>
                                            <Box className='pricewish'>Rs.1000 </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='deletewishlist'>
                                    <DeleteIcon onClick={() => removeItem(book.product_.id._id)} sx={{ color: '#9D9D9D' }} fontSize='small' />
                                </Box>
                            </Box>
                        </Box>
                    ))}

                </Box>

                <Box className='footer1'>
                    <Box className='footertxt1'>Copyright @ 2020, Bookstore Private Limited.All Rights Reserved</Box>
                </Box>
            </Box>

        </div>
    )
}

export default MyWishlist