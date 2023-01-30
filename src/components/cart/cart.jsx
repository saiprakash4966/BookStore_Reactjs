import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import book1 from '../../images/component.png'
import { useState } from "react";
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
// import './cart.css';
import { TextField } from '@mui/material';
import { cartItemListApi, RemoveBookFromCart, UpdateCartApi } from '../../services/dataService';
import Address from './address';
import Order from './order';
import Header from '../header/header';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

  mycartbox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',


  },

  mycartmain: {
    width: '80vw',
    height: 'auto',
    display: 'flex',
    background: '#FFFFFF 0% 0 % no - repeat padding- box',
    borderRadius: '3px',
    opacity: '1',
    /* margin-left: -5%;
    margin-top: 1%; */
},

mycartalign : {

  flexDirection: 'column',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  top: '-130px',
  left: '160px',
  alignItems: 'flex - start',
  alignContent: 'space - between',
  justifyContent: 'space - evenly',
  textAlign: 'left',
},

mycartrate  :{
  marginTop: '5%',
  marginLeft: '0%',
  font: 'normal normal normal 20px / 13px Roboto',
  textAlign: 'left',
  alignItems: 'flex - start',
  alignContent: 'flex - start',
  opacity: '1',
},

mycartprice :{
  width: '36px',
  height: '13px',
  textAlign: 'left',
  textDecoration: 'line - through',
  font: 'normal normal normal 15px / 13px Roboto',
  letterSpacing: '0px',
  color: '#878787',
  opacity: '1',
  marginLeft: '7%',
  marginTop: '-4%',
  alignItems: 'flex - start',
  alignContent: 'flex - start',
},

mycartbox :{
  height: '22px',
  width: '30px',
  display: 'flex',
  border: '1px solid gray',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  right: '-30px',
  top: '-20px',
},

/* .maycart-p {
    margin-top: 5%;
    margin-left: 65%;
    width: 124px;
    height: 17px;
    text-align: left;
    font: normal normal normal 14px/17px Lato;
    letter-spacing: 0px;
    color: #0A0102;
    opacity: 1;
} */
mycarticon :{
  width: '14px',
  height: '20px',
  opacity: '1',
  marginLeft: '62%',

},

mycartselect :{
  top: '-50px',
  left: '200px',
  width: '275px',
  height: '40px',
  background: '#FFFFFF 0 % 0 % no - repeat padding - box',
  border: '1px solid #DCDCDC',
  borderRadius: '1px',
  opacity: '1',
},

mycartauthor :{
  width: '100px',
  height: '12px',
  textAlign: 'left',
  font: 'normal normal normal 10px / 12px Lato',
  letterSpacing: '0px',
  color: '#9D9D9D',
  opacity: '1',
  marginLeft: '1',
},

mycartimg :{
  background: "transparent url('../../images/component.png') 0% 0% no-repeat padding-box"

},

mycartaddress :{
  width: '102px',
  height: '18px',
  textAlign: 'left',
  font: 'normal normal normal 15px / 18px Lato',
  letterSpacing: '0px',
  color: '#333232',
  opacity: '1',
  marginLeft: '2%',
},

mycartorder: {
  width: '103px',
  height: '18px',
  textAlign: 'left',
  font: 'normal normal normal 15px / 18px Lato',
  letterSpacing: '0px',
  color: '#333232',
  opacity: '1',
  marginLeft: '2%',
},

['@media only screen and (min-width:769px) and (max-width:1024px)']:
    {
       

    },




})

function Cart(props) {
  const classes = useStyles()

  const [hide, setHide] = useState(false)
  const [addressToggle, setAddressToggle] = useState(false)
  const [orderToggle, setOrderToggle] = useState(false)
  const [count, setCount] = useState(1);
  const [booklist, setBooklist] = useState([])
  const [bookcart, setBookCart] = useState([])

  const placedOrder = () => {
    setHide(true)
    setAddressToggle(true)

  }

  const listenToAddress = () => {
    setAddressToggle(true)

  }
  const listenToAddressDetails = () => {
    setOrderToggle(true)
  }
  const listenToOrder = () => {
    setOrderToggle(true)
  }
  const listenToOrderDetails = () => {
    setOrderToggle(false)

  }
  const removeBook = (id) => {
    RemoveBookFromCart(id).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
  const decrementQuantity = (id, quantity) => {
    let input = {
      quantityToBuy: quantity - 1,
    }
    if (quantity > 1) {
      setCount(quantity - 1);
    } else {
      setCount(1);
    }
    UpdateCartApi(id, input).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);
    })
    console.log(input)
  }

  const incrementQuantity = (id, quantity) => {

    let input = {
      quantityToBuy: quantity + 1,
    }
    setCount(quantity + 1);
    UpdateCartApi(id, input).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);
    })
    console.log(input)
  }
  const getCart = () => {
    cartItemListApi().then((res) => {
      console.log(res)
      setBookCart(res.data.result)
      setBooklist(res.data.result)
    }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
    console.log("Getting cart data")
  }

  console.log(bookcart)
  const autoRefresh = () => {
    cartItemListApi()
  }

  useEffect(() => {
    getCart()
  }, [])
  return (

    <Paper elevation={0}>
      <Header />
      <Box style={{ width: '55vw', height: 'auto', border: '1px solid #DCDCDC', borderRadius: '1px', marginLeft: '240px', marginTop: '50px', background: '#FFFFFF 0% 0% no-repeat padding-box', opacity: '1', flex: 'wrap', flexDirection: 'column' }} className='cartcontainer' >

        <Box >

          <p style={{ marginRight: '720px', marginTop: '10px', fontWeight: 'bold', opacity: '1' }} className={classes.mycart}>My cart(1)</p>
          <Box className={classes.mycarticon} style={{ marginTop: '-8px', marginLeft: '490px', opacity: '1' }}><RoomIcon style={{ marginTop: '-8px', marginLeft: '35px' }} className={classes.room}/> </Box>
          <Box><TextField sx={{ width: '30ch', height: '10ch', marginLeft: '460px', marginTop: '-45px', opacity: '1' }}>
          </TextField>
            <p style={{ marginLeft: '475px', marginTop: '-70px', opacity: '1' }}>BridgeLabz Solutions LLP, No...</p>
          </Box>
        </Box>
        {booklist.map((book) =>
        (<Box book={book}>
          <Box>
            <Box style={{ marginRight: '700px', marginTop: '-10px', opacity: '1' }}>
              <img src={book1} alt='' className={classes.mycartimg} />
            </Box>
            <Box className={classes.mycartalign}>
              <Box>
                <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}>{book.product_id.bookName}</p>
                <p className={classes.mycartauthor}>by {book.product_id.author}</p>
                <Box>
                  <p className={classes.mycartrate} >({book.product_id.discountPrice})</p>
                  <p className={classes.mycartprice}>Rs.{book.product_id.price}</p>
                </Box>
                <Box >
                  <div  >
                    <div>
                      <Box size="small" color="#DBDBDB" aria-label="add" sx={{ width: '30px', height: '20px', marginTop: '20px', marginLeft: '1px', color: 'black' }}  >
                        <RemoveCircleOutlinedIcon onClick={() => decrementQuantity(book._id, book.quantityToBuy)} />
                      </Box>
                      <Box className={classes.mycartbox}>{book.quantityToBuy}</Box>
                      <Box size="small" color="#DBDBDB" aria-label="substract" sx={{ width: '30px', height: '20px', marginTop: '-45px', marginLeft: '65px', color: 'black' }} >
                        <AddCircleOutlinedIcon onClick={() => incrementQuantity(book._id, book.quantityToBuy)} />
                      </Box>
                      <Box>
                        <Button style={{ marginLeft: '100px', marginTop: '-45px' }} onClick={() => removeBook(book._id)}>Remove</Button>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>))}
        <Box >
          {
            hide ? null
              :
              <Button variant="contained" onClick={placedOrder} sx={{ marginTop: '-100px', marginLeft: '560px' }}>Placed Order</Button>
          }

        </Box>

      </Box>
      {
        addressToggle ? <Address listenToAddressDetails={listenToAddressDetails} />
          :
          <Box style={{ width: '845px', height: '50px', borderRadius: '1px', marginLeft: '240px', marginTop: '10px', border: '1px solid #DCDCDC' }}>
            <p className={classes.mycartaddress} listenToAddress={listenToAddress}>Address Details</p>
          </Box>
      }

      {
        orderToggle ? <Order listenToOrderDetails={listenToOrderDetails} />
          :
          <Box style={{ width: '845px', height: '50px', border: '1px solid #DCDCDC', borderRadius: '1px', marginLeft: '240px', marginTop: '10px' }}>
            <p className={classes.mycartorder} listenToOrder={listenToOrder} >Order Summary</p>
          </Box>
      }

    </Paper>
  );
}
export default Cart;
