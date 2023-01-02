import React from 'react';
import './SignUp.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function SignUp(props) {
    const openSignin = () => {
        props.listenToSignUp()
    }

    const submit = () => {
        

    }





    return (
        <Paper className='Maincolor' sx={{ backgroundColor: '#9e9e9e' }}>
            <Box className='displayone'>
                <Box className='signup'>
                    <h3 style={{ color: '#878787' }} onClick={openSignin}>LOGIN</h3>
                    <h3 >SIGNUP</h3>
                </Box>
                <Box className='detail' >

                    <Box className='fullname'>
                        <span className='alldetails' >Full Name</span>
                        <TextField size='small' variant="outlined"

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className='email'>
                        <span className='alldetails' >Email Id</span>
                        <TextField size='small' variant="outlined"

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className='password'>
                        <span className='alldetails'>Password</span>
                        <TextField size='small' variant="outlined"

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />
                        <VisibilityOffIcon sx={{ marginLeft: 22, marginTop: -3 }} />


                    </Box>
                    <Box className='mobile'>
                        <span className='alldetails'>Mobile No</span>
                        <TextField size='small' variant="outlined"

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />



                    </Box>




                </Box>











            </Box>
            <Box className='other'>
                <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Signup</Button>
            </Box>

        </Paper>


    );
}

export default SignUp;