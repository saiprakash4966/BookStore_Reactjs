import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from '../../images/component.png';
import Button from '@mui/material/Button';




function Order() {


    return (
        <Paper className=''>

            <Box className=''>
                <Box className='' key="9"></Box>
                <span style={{ position: 'relative', right: '350px' }}>Order Summary</span>
                <Box className='' ></Box>

                <Box className='' >
                    <Box className=''>
                        <img key="12" src={img} alt="img" width='10%' height='10%' style={{ position: 'relative', top: '8px' }} />
                    </Box>
                    <Box className=''>
                        <span style={{ font: ' normal normal normal 16px/20px Lato', color: '#0A0102', }} key="11"></span>
                        <span style={{ font: ' normal normal normal 13px/16px Lato', color: '#9D9D9D', }} key="14"></span>
                        <Box className=''>
                            <span style={{ font: ' normal normal normal 15px/18px Lato', color: '#0A0102', }} key="15"></span>
                            <span style={{ font: ' normal normal normal 12px/15px Lato', color: '#9D9D9D', textDecoration: 'line-through', }} key="16"></span>
                        </Box>
                    </Box>
                </Box>
                <Button variant="contained" sx={{
                    background: ' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px',
                    position: 'relative', left: '350px', top: '10px'
                }} onClick='' >Checkout</Button>
                <Box className='' ></Box>
            </Box>
        </Paper>
    );
}

export default Order;