
import React, { useState, useEffect } from 'react'
import book1 from '../images/component.png';
import book2 from '../images/component.png';
import './bookDetails.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { addToCartApi, addToWishlistApi, getcartBookList } from '../../services/dataService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Counter from '../counter/counter';



function BookDetails(props) {
    const [wishList, setWishList] = useState(false)
    const [cart, setCart] = useState(false)


    const addCart = () => {
        setCart(true)
        let id = {
            product_id: props.id
        }
        console.log(id)
        addToCartApi(id)
            .then(res => {
                console.log(res)
                setCart(res.data.result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const addWishList = () => {
        setWishList(true)
        let id = {
            product_id: props.id
        }

        console.log(id)
        addToWishlistApi(id)
            .then(res => {
                console.log(res)
                setWishList(res.data.result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getcartBookList()
            .then((res) => {
                console.log(res)
                res.data.result.filter((item) => {
                    if (item._id === props.id) {
                        setCart(res.data.result)
                        return item
                    }
                })
                setCart(res.data.result)
            })
    }, [props.id])




    return (
        <div className='book-details'>
            <div>
                <img src={book1} alt='' className='book1-img' style={{ marginLeft: '10px', border: '1px solid #7C1E1E' }} />
            </div>
            <div>
                <img src={book2} alt='' className='book2-img' style={{ marginTop: '50px', marginLeft: '-40px' }} />
            </div>
            <div className='details-img'>
                <img src={book1} alt='' className='bookdetails-img' />

                <div className='details-cart' >
                    {
                        cart ? <Counter />
                            :
                            <Button onClick={addCart} variant="contained" style={{ backgroundColor: '#8F2B2F', marginRight: '30px' }} >ADD TO CART</Button>
                    }
                </div>

                <div className='details-wishlist'>
                    {
                        wishList ? <Button variant="contained" className='addIcon' startIcon={<FavoriteIcon sx={{ color: 'red' }} />} style={{ backgroundColor: '#373434' }}></Button>
                            :
                            <Button variant="contained" className='addIcon' startIcon={<FavoriteIcon />} style={{ backgroundColor: '#373434' }} onClick={addWishList}>WISHLIST</Button>

                    }

                </div>

            </div>
            <div style={{ marginTop: '-20px' }}>
                <p style={{ marginBottom: '90px', marginLeft: '10px', fontWeight: 'bold', opacity: '1' }}>
                    {/* DON'T MAKE ME THINK */}  {props.bookName}
                </p>
                <p style={{ marginTop: '-80px', marginLeft: '60px', opacity: '1', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>
                    {/* by Steve Krug */} {props.author}
                </p>
                <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'center', marginLeft: '60px', marginTop: '10px' }}>
                    <StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '0px', color: 'white', size: 'small' }} />
                    <h6 style={{ marginTop: '-20px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                    <h6 className='details-rates'>{props.quantity}</h6>
                </Box>
                <h6 className='details-rate'>{props.discountPrice}
                    <Box className='details-price' >
                        {props.price}
                    </Box>
                </h6>
                <Box className='bookdetails-typography'>
                    <p style={{ marginLeft: '-530px', marginTop: '10px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>Book Detail</p>

                </Box>

            </div>
            <Box style={{ marginTop: '270px', marginLeft: '-100px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>
                <h4>Customer Feedback</h4>
                <Typography component="legend">Overall rating</Typography>
                <Rating name="no-value" value={null} />
            </Box>
            <Box>
                <Button variant="contained" style={{ marginTop: '430px', left: '420px', font: 'normal normal normal 14px/19px Roboto;', color: '#FFFFFF', textAlign: 'left', textTransform: 'capitalize' }} onClick=''>Submit</Button>
            </Box>


        </div>
    )
}

export default BookDetails;
