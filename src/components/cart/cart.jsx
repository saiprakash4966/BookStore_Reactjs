import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from '../../images/component.png';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Address from './address';
import Order from './order';
import Header from '../header/header';





function Cart() {

    return (

        <Paper elevation={0} className=''>
            <Header />
            <Box className='' ></Box>
            <Box className=''>
                <Box className=''>
                    <Box className='' ></Box>
                    <Box className=''>

                        <span className='' >My cart  (1)</span>
                        <Box className='' sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label"><RoomIcon sx={{ color: '#A03037' }} />BridgeLabz Solutions LLP, No...</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=''
                                    label="Location"
                                    onChange=''
                                >
                                </Select>
                            </FormControl>
                        </Box>

                    </Box>
                    <Box className='' ></Box>

                    <Box className='' >
                        <Box sx={{ position: 'relative', top: '10px', right: '80px' }}>
                            <img src={img} alt="img" width='10%' height='10%' />
                        </Box>
                        <Box className=''>
                            <span className=''></span>
                            <span className=''></span>
                            <Box className=''>
                                <span className=''></span>
                                <span className=''></span>
                            </Box>
                            <Box className=''>
                                <div className=''>
                                    <div className=''>
                                        <Box size="small" color="#DBDBDB" aria-label="add" sx={{ width: '30px', height: '20px', }}  >
                                            <RemoveCircleOutlinedIcon />
                                        </Box>
                                        <span className=''></span>
                                        <Box size="small" color="#DBDBDB" aria-label="substract" sx={{ width: '30px', height: '20px' }} >
                                            <AddCircleOutlinedIcon />
                                        </Box>
                                    </div>
                                </div>
                                <Button className='' onClick=''>Remove</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className=''></Box>
                    <Box className=''>

                        <Button variant="contained" onClick=''>Placed Order</Button>

                    </Box>
                    <Box className='' ></Box>
                </Box>
            </Box>

            <Box className=''></Box>


            <Address />
            <Box className=''> <span className='' >Address Details</span> </Box>


            <Box className=''></Box>

            <Order />
            <Box className=''><span className='' >Order summery</span></Box>

        </Paper>
    );
}

export default Cart;