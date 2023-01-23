import React, { useState } from 'react'
import book1 from '../../images/component.png';
import book2 from '../../images/component.png';
import './bookDetails.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { addToCartApi, addToWishlistApi, UpdateCartApi } from '../../services/dataService';






function BookDetails(props) {
    const [cart, setCart] = useState(false)
    const [wishList, setWishList] = useState(false)
    const [count, setCount] = useState(1);

    const addCart = () => {
        setCart(true)
        let id = {
            product_id: props.id
        }
        console.log(id)
        addToCartApi(id)
            .then(res => {
                console.log(res)
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
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    const decrement = () => {
        let input = {
            quantityToBuy: count - 1,
        }
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(1);
        }
        UpdateCartApi(props.id, input).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        })
        console.log(input)
    }
    const increment = () => {

        let input = {
            quantityToBuy: count + 1,
        }
        setCount(count + 1);
        UpdateCartApi(props.id, input).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        })
        console.log(input)
    }
    





    return (
        <div className='bookdetails-main'>
            <div>
                <img src={book1} alt='' className='book1-img' style={{ marginLeft: '10px', border: '1px solid #7C1E1E' }} />
            </div>
            <div>
                <img src={book2} alt='' className='book2-img' style={{ marginTop: '50px', marginLeft: '-40px' }} />
            </div>
            <div className='bookdetails-submain'>
                <img src={book1} alt='' className='bookdetails-img' />
                <div className='bookdetails-details' >
                    {
                        cart ? (
                            <Box>
                                <Box style={{}}>
                                    <Box onClick={() => decrement(props._id, props.quantityToBuy)} style={{ marginLeft: '-90px', marginTop: '10px' }}>
                                        <RemoveCircleOutlinedIcon />
                                    </Box>
                                    <p style={{ marginTop: '-25px', marginLeft: '-50px' }}>{count}</p>
                                    <Box onClick={() => increment(props._id, props.quantityToBuy)} style={{ marginTop: '-40px', marginLeft: '-10px' }} >
                                        <AddCircleOutlinedIcon />
                                    </Box>
                                </Box>
                            </Box>
                        ) :
                            <Button variant="contained" style={{ backgroundColor: '#8F2B2F', marginRight: '30px' }} onClick={addCart}>ADD TO CART</Button>
                    }
                </div>
                <div className='bookDetails-wishlist'>
                    {
                        wishList ? <Button variant="contained" className='addIcon' startIcon={<FavoriteIcon sx={{ color: 'red' }} />} style={{ backgroundColor: '#373434' }}></Button>
                            :
                            <Button onClick={addWishList} variant="contained" className='addIcon' startIcon={<FavoriteIcon />} style={{ backgroundColor: '#373434' }}>WISHLIST</Button>

                    }

                </div>
            </div>
            <div style={{ marginTop: '-20px', alignItems: 'flex-start' }}>
                <div className='bookdetails-align'>
                    <p style={{ marginBottom: '100px', fontWeight: 'bold', opacity: '1' }}>{props.bookName}</p>
                    <p style={{ marginTop: '-90px', alignItems: 'flex-start', opacity: '1', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>by {props.author}</p>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'flex-start', marginLeft: '1px', marginTop: '-10px' }}>
                        <StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small' }} />
                        <h6 style={{ marginTop: '-25px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                        <h6 className='bookdetails-rates'>({props.quantity})</h6>
                    </Box>
                    <h6 className='bookdetails-rate'>Rs.{props.discountPrice}
                        <Box className='bookdetails-price'>
                            ({props.price})
                        </Box>
                    </h6></div>
                <Box className='bookdetails-typography'>
                    <p style={{ marginLeft: '-580px', marginTop: '20px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>Book Detail</p>
                </Box>
                <Box style={{ marginTop: '-10px', font: 'normal normal normal 15px/13px Roboto', color: '#333232', marginLeft: '10px' }}>
                    <h4>Customer Feedback</h4>
                    <Typography component="legend">Overall rating</Typography>
                    <Rating name="no-value" value={null} />
                </Box>
                {/* <Box>
                    <Button variant="contained" style={{ marginTop: '20px', left: '600px', font: 'normal normal normal 14px/19px Roboto;', color: '#FFFFFF', textAlign: 'left', textTransform: 'capitalize' }} onClick={''}>Submit</Button>
                </Box> */}
            </div>

        </div>
    )
}

export default BookDetails