import React, { useState } from 'react'
import book1 from '../../images/component.png';
import book2 from '../../images/component.png';
// import './bookDetails.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { addToCartApi, addToWishlistApi, UpdateCartApi } from '../../services/dataService';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    bookdetailsmain: {
        width: '80vw',
        height: '62.5vh',
        display: 'flex',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: '1',
        marginLeft: '2%',
        marginTop: '1%',
    },

    bookdetailssubmain: {
        width: '25%',
        height: '60%',
        border: '1px solid #E2E2E2',
    },

    bookdetailsimg: {
        width: '80%',
        height: '90%',
        marginTop: '5%',
    },

    bookdetailsdetails: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '5px',
        marginLeft: '-42%',
    },

    bookDetailswishlist: {
        marginTop: '-13%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
        marginLeft: '25%',
        width : '100%',
    },

    bookdetailsrates: {
        width: '18px',
        height: '13px',
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        marginLeft: '110%',
        marginTop: '-95%',
    },

    bookdetailsrate: {
        marginTop: '8%',
        marginLeft: '1%',
        font: 'normal normal normal 20px/13px Roboto',
    },

    bookdetailsprice: {
        width: '36px',
        height: '13px',
        textAlign: 'left',
        textDecoration: 'line-through',
        font: 'normal normal normal 15px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        marginLeft: '80%',
        marginTop: '-10%',
    },

    bookdetailstypography: {
        width: '500%',
        height: '25%',
        marginTop: '-15%',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #E2E2E2',
        borderRadius: '3px',
        marginLeft: '7%',
        overflowy: 'scroll',
    },

    book1img: {
        top: '132px',
        left: '179px',
        width: '35px',
        height: '45px',
        background: "transparent url('../../images/GroupDiscussion.png') 0% 0% no-repeat padding-box",
        opacity: '1',
        border: '1px solid #7C1E1E',
        borderRadius: '0px 1px 1px 1px',
    },

    book2img: {
        top: '181px',
        left: '174px',
        width: '44px',
        height: '54px',
        border: '1px solid #D1D1D1',
        borderRadius: '0px 1px 1px 1px',
        opacity: '1',
    },
    addIcon: {
        width: '40%',
        background: '#333333 !important',
    },
    bookdetailsalign: {
        alignItems: 'flexstart',
        flexDirection: 'column',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        position: 'relative',
        top: '1px',
        left: '30px',
    },
    ['@media only screen and (min-width:769px) and (max-width:1024px)']:
    {
        bookdetailsmain: {
            
            marginLeft: '5%',
            
        },
        bookdetailsdetails: {
            marginTop: '15%',
             
           
        },
    
        bookDetailswishlist: {
            marginTop : '-25%',
            width : '100%',
            
          
        },
       
       
        

    },
})

function BookDetails(props) {
    const classes = useStyles()
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
        <div className={classes.bookdetailsmain}>
            <div>
                <img src={book1} alt='' className={classes.book1img} style={{ marginLeft: '10px', border: '1px solid #7C1E1E' }} />
            </div>
            <div>
                <img src={book2} alt='' className={classes.book2img} style={{ marginTop: '50px', marginLeft: '-40px' }} />
            </div>
            <div className={classes.bookdetailssubmain}>
                <img src={book1} alt='' className={classes.bookdetailsimg} />
                <div className={classes.bookdetailsdetails}>
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
                <div className={classes.bookDetailswishlist}>
                    {
                        wishList ? <Button variant="contained" className={classes.addIcon} startIcon={<FavoriteIcon sx={{ color: 'red' }} />} style={{ backgroundColor: '#373434' }}></Button>
                            :
                            <Button onClick={addWishList} variant="contained" className={classes.addIcon} startIcon={<FavoriteIcon />} style={{ backgroundColor: '#373434' }}>WISHLIST</Button>

                    }

                </div>
            </div>
            <div style={{ marginTop: '-20px', alignItems: 'flex-start' }}>
                <div className={classes.bookdetailsalign}>
                    <p style={{ marginBottom: '100px', fontWeight: 'bold', opacity: '1' }}>{props.bookName}</p>
                    <p style={{ marginTop: '-90px', alignItems: 'flex-start', opacity: '1', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>by {props.author}</p>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'flex-start', marginLeft: '40px', marginTop: '-10px' }}>
                        <StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small' }} />
                        <h6 style={{ marginTop: '-25px', marginLeft: '-20px', color: 'white' }} className='rating'>4.5</h6>
                        <h6 className={classes.bookdetailsrates}>({props.quantity})</h6>
                    </Box>
                    <h6 className={classes.bookdetailsrate}>Rs.{props.discountPrice}
                        <Box className={classes.bookdetailsprice}>
                            ({props.price})
                        </Box>
                    </h6></div>
                <Box className={classes.bookdetailstypography}>
                    <p  className='typo'style={{ marginLeft: '-500px', marginTop: '20px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>Book Detail</p>
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