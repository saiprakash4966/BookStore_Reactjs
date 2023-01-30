import { Box, Button } from '@mui/material'
import React from 'react'
import order from '../../images/unnamed.jpg';
// import './orderPlaced.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    orderone :{
        width:'100%',
        height:'120%',
        display:'flex',
       flexDirection: 'column',
       justifyContent: 'center',
        alignItems: 'center',
       alignContent: 'center',
    },
    orderparam: {
        width: '350px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '0.001%',
        textAlign: 'center',
        font: 'normal normal normal 18px/15px Lato',
        
    },
    ordersbox :{
       display: 'flex',
       flexDirection: 'column',
        gap: '10px',
        width:'751px',
        height:'112px',
    },
    ordertable :{
      borderCollapse: 'collapse',
        width:'100%',
    },
    ordertr :{
        backgroundColor: '#DCDCDC',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        padding:'8px',
        font: 'normal normal medium 12px/15px Lato',
        color:'#333232',
       textAlign: 'center',
        width:'751px',
        height:'20px',
    },
    
    ordertr1 :{
        backgroundColor: '#FFFFFF',
        border: '1px solid #DCDCDC',
        textAlign: 'center',
        padding:'8px',
        font: 'normal normal normal 12px/15px Lato',
    },
})

function OrderPlaced() {
    const classes = useStyles()
    
    const navigateOne = useNavigate()
    const openOrder = ()=>{
       navigateOne('/dashboard')
    }
    

    
    return (
        <div className={classes.ordermain}>
            <Header/>
            <Box className={classes.orderone}>
            <Box>
                <img src={order} alt='' />
            </Box>
            <p className={classes.orderparam}>
                <p>hurray!!! your order is confirmed </p>
                <p>the order id is #123456 save the order id for</p>
                <p>further communication..</p>
            </p>
            <Box className={classes.ordersbox}>
                <table className='order-table'>
                    <thead>
                        <tr className={classes.ordertr}>
                            <th className={classes.ordertr}>Email us</th>
                            <th className={classes.ordertr}>Contact us</th>
                            <th className={classes.ordertr}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classes.ordertr1}>
                            <td className={classes.ordertr1}>admin@bookstore.com</td>
                            <td className={classes.ordertr1}>+91 8163475881</td>
                            <td className={classes.ordertr1}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            <Box>
             <Button variant="contained" onClick={openOrder}  sx={{background:' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px'}}>Continue Shopping</Button>
             </Box>
             </Box>
        </div>
    )
}

export default OrderPlaced