import { Box, Button } from '@mui/material'
import React from 'react'
// import './address.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { putAddress } from '../../services/dataService';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    addressbox : {
        width: '842px',
        height: '550px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        borderRadius: '1px',
        opacity: '1',
        marginLeft: '16%',
        marginTop: '1%',
    },
    
    addresscustomer : {
        width: '139px',
        height: '24px',
        textAlign: 'left',
        font: 'normal normal medium 18px/24px Roboto',
        letterSpacing: '0px',
        color: '#333232',
        opacity: '1',
        marginLeft: '4%',
    },
    
    addressnew : {
        width: '170px',
        height: '35px',
        background: '#A03037 0% 0% no-repeat padding-box',
        borderRadius: '2px',
        opacity: '1',
        top: '-40px',
        left: '290px',
        font: 'normal normal normal 12px/16px Roboto',
    },
    
    addressname:{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        opacity: '1',
        marginLeft: '20%',
    },
    
    addressnumber : {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        opacity: '1',
        marginLeft: '30%',
    },
    
    addresswork :{
        width: '55px',
        height: '20px',
        textAlign: 'left',
        font: 'normal normal medium 15px/20px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        marginLeft: '4%',
    },
    
    addressp :{
        width: '47px',
        height: '16px',
        textAlign: 'left',
        font: 'normal normal normal 12px/16px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        marginLeft: '5%',
    },
    
    addressinput : {
        width: '523px',
        height: '82px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        borderRadius: '2px',
        opacity: '1',
    },
    
    addresshome : {
        width: '55px',
        height: '20px',
        textAlign: 'left',
        font: 'normal normal medium 15px/20px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        marginLeft: '4%',
    },
    
    addressp1 : {
        width: '47px',
        height: '16px',
        textAlign: 'left',
        font: 'normal normal normal 12px/16px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        opacity: '1',
        marginLeft: '5%',
    },
    
    addressinputs: {
        width: '523px',
        height: '82px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #DCDCDC',
        borderRadius: '2px',
        opacity: '1',
    },
    
    addresscontinue : {
        width: '50%',
        background: '#3371B5 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: '1',
        textAlign: 'left',
        font: 'normal normal medium 14px/17px Lato',
        letterSpacing: '0px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    
    },
    
    addresstype: {
        width: '500px',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        position: 'relative',
        top: '10px',
        right: '20px',
    },

})

function Address(props) {
    const classes = useStyles()
    const [orders, setOrders] = useState(false)
    const [customerAddress, setCustomerAddress] = useState({ addressType: '', fullAddress: '', city: '', state: '' })

    const takeAddressType = (event) => {
        setCustomerAddress({
            ...customerAddress, addressType: event.target.value
        })
    }
    const takeFullAddress = (event) => {
        setCustomerAddress({
            ...customerAddress, fullAddress: event.target.value
        })
    }
    const takeCity = (event) => {
        setCustomerAddress({
            ...customerAddress, city: event.target.value
        })
    }
    const takeState = (event) => {
        setCustomerAddress({
            ...customerAddress, state: event.target.value
        })
    }

    const listenToOrders = () => {
        console.log(customerAddress)
        putAddress(customerAddress)
            .then((res) => {
                console.log(res)
                setOrders(true)
                props.listenToAddressDetails()
            }
            ).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div >
            <Box className={classes.addressbox}>
                <p className={classes.addresscustomer}>Customer Details</p>
                <Box><Button className={classes.addressnew} style={{ color: '#A03037', border: '1px solid #A03037' }}>Add New Address</Button></Box>
                <Box style={{ marginLeft: '-180px' }}>
                    <TextField className={classes.addressname} style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="Full Name"
                    />
                    <TextField className={classes.addressnumber} style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="Phone Number"
                    /></Box>
                <Box>

                </Box>
                <Box>
                    <p className={classes.addressp}>Address</p>
                    <TextField className={classes.addressinput} style={{ marginLeft: '-160px' }} onChange={takeFullAddress} />
                </Box>
                <Box>
                    <TextField className={classes.addresscity} style={{ marginLeft: '-160px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="City/Town"
                        onChange={takeCity}
                    />
                    <TextField className={classes.addressstate} style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="State"
                        onChange={takeState}
                    />
                </Box>
                <Box>
                    <p className={classes.addresshome}>Type</p>
                </Box>
                <Box className={classes.addresstype} onClick={takeAddressType}>
                    <Box>
                        <input type="radio" name='type' id="Home" value="Home" />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Home </lable>
                    </Box>
                    <Box>
                        <input type="radio" name='type' id='Office' value='Office' />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Office</lable>
                    </Box>
                    <Box>
                        <input type="radio" name='type' id='other' value='Other' />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> other </lable>
                    </Box>
                </Box>
                {
                    orders ? null
                        :
                        <Box style={{ marginLeft: '600px', border: '1px solid #3371B5', width: '150px', borderRadius: '3px', marginTop: '60px' }}>
                            <Button fullWidth variant="contained" className={classes.addresscontinue} onClick={listenToOrders}>CONTINUE</Button>
                        </Box>
                }

            </Box>
        </div>
    )
}

export default Address