import React from 'react';
import './SignIn.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { loginApi } from '../../services/userService';
import { useNavigate } from "react-router-dom";



const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn(props) {
    const [signInObj, setsignInObj] = useState({ email: "", password: "" })

    const [regexObj, setregexObj] = React.useState({
        emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: ""
    })

    const takeEmail = (event) => {
        console.log(event.target.value)
        setsignInObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const takePassword = (event) => {
        setsignInObj((prevState) => ({ ...prevState, password: event.target.value }))

    }

    const openSignup = () => {
        props.listenToSignIn()
    }
    const submit = () => {
        console.log("submit", signInObj)
        let emailText = emailRegex.test(signInObj.email)
        let passwordText = passwordRegex.test(signInObj.password)
        if (emailText === false) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        }
        else if (emailText === true) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }

        if (passwordText === false) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        else if (passwordText === true) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        if (emailText === true && passwordText === true) {
            loginApi(signInObj).then((response) => {
                console.log(response)
            })

                .catch((error) => { console.log(error) })
        }
    }




    return (
        <Paper className='color' sx={{ backgroundColor: '#9e9e9e' }}>

            <Box className='display'>
                <Box className='login'>
                    <h3>LOGIN</h3>
                    <h3 style={{ color: '#878787' }} onClick={openSignup}>SIGNUP</h3>
                </Box>
                <Box className='details'  >
                    <Box className='email'>
                        <span className='emailpass'>Email Id</span>
                        <TextField id="email" size='small' variant="outlined" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}  sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />
                    </Box>
                    <Box className='password'>
                        <span className='emailpass'>Password</span>
                        <TextField size='small' variant="outlined" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />

                        <VisibilityOffIcon sx={{ marginLeft: 22, marginTop: -3 }} />
                        <p className='forgot' >Forgot password?</p>
                    </Box>
                </Box>
                <Box className='others'>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Login</Button>
                    <h5>OR</h5>
                </Box>
                <Box className='fbgoogle'>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="contained" sx={{ color: 'black', backgroundColor: '#f5f5f5' }}>Google</Button>
                </Box>

            </Box>

        </Paper>

    );
}

export default SignIn;