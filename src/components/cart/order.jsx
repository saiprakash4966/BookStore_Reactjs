import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import './order.css'
import book1 from '../../images/component.png';
import { useNavigate } from 'react-router-dom';
import { addToOrder, cartItemListApi } from '../../services/dataService';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles ({
    orderbox :{
        width: '842px',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        borderRadius: '1px',
        opacity: '1',
        marginLeft: '16%',
        marginTop: '1%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    orderauthor : {
        width: '93px',
        height: '12px',
        textAlign: 'left',
        font: 'normal normal normal 10px/12px Lato',
        letterSpacing: '0px',
        color: '#9D9D9D',
        opacity: '1',
    },
    orderrate :{
        marginTop: '8%',
        marginLeft: '-1%',
        font: 'normal normal normal 20px/13px Roboto',
    },
    orderprice :{
        width: '36px',
        height: '13px',
        textAlign: 'left',
        textDecoration: 'line-through',
        font: 'normal normal normal 15px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        marginLeft: '100%',
        
    },
    orderalign :{
        alignItems: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        marginLeft: '20%',
        marginTop: '-16%',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left',
    },
    orderimg :{
        background: "transparent url('../../images/component.png') 0% 0% no-repeat padding-box"
        
    },
})

function Order() {
    const classes = useStyles()
    const [bookOrder, setBookOrder] = useState([])


    const navigate = useNavigate()
    const orderPlaced = () => {
        let orderArr = []
        for (let item = 0; item < bookOrder.length; item++) {
            let orderList = {
                "product_id": bookOrder[item].product_id._id,
                "product_name": bookOrder[item].product_id.bookName,
                "product_quantity": bookOrder[item].product_id.quantityToBuy,
                "product_price": bookOrder[item].product_id.discountPrice,
            }
            orderArr.push(orderList);
            console.log(orderArr);
        }
        let orderObj = { orders: orderArr }

        addToOrder(orderObj).then(
            (response) => {
                console.log(response)
                // setBookOrder(true)
                navigate('/orderPlaced')
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const getCart = () => {
        cartItemListApi().then((res) => {
            console.log(res);
            setBookOrder(res.data.result)
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log("Getting cart data")
    }
    console.log(bookOrder)

    useEffect(() => {
        getCart()
    }, [])
    return (
        <div>
            <Box className='order-box'>
                <p style={{ marginRight: '650px', opacity: '1' }}>Order Summary</p>
                {bookOrder.map((book) =>
                (<Box book={book}>
                    <Box style={{ height: '130px', justifyContent: 'space-between' }}>
                        <Box style={{ marginRight: '650px', marginTop: '20px', opacity: '1', justifyContent: 'space-between', flexDirection: 'column', columnGap: '40px' }}>
                            <img src={book1} alt='' className='order-img' />
                        </Box>
                        <Box className='order-align'>
                            <Box>
                                <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}>{book.product_id.bookName}</p>
                                <p className='order-author' style={{ opacity: '1', marginTop: '-5px' }} >By {book.product_id.author}</p>
                            </Box><Box>
                                <p className='order-rate' style={{ opacity: '1', marginTop: '5px' }}>Rs.({book.product_id.discountPrice})</p>
                                <p className='order-price' style={{ opacity: '1', marginTop: '-33px' }}>Rs.{book.product_id.price}</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>))}
                <Box style={{ marginLeft: '600px', border: '1px solid #3371B5', width: '150px', borderRadius: '3px', marginTop: '80px' }}>
                    <Button fullWidth variant="contained" className='address-continue' onClick={orderPlaced}>CHECKOUT</Button>
                </Box>


            </Box>
        </div>
    )
}

export default Order