import React from 'react';
import './SignUp.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signup } from '../../services/userService';

const fullNameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^([6-9]{1}[0-9]{9})$/;

function SignUp(props) {

    
    const openSignin = () => {
        props.listenToSignUp()
    }

    const [signupObj, setsignupObj] = React.useState({ fullName: "", email: "", password: "" ,mobileNo : "" })
    
    const [regexObj,setregexObj] = React.useState({
                fullNameBorder : false , fullNameHelper : "", emailBorder : false,emailHelper : "",passwordBorder : false ,passwordHelper : "", mobileBorder : false,mobileHelper : "",})
    const takeFullName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, fullName: event.target.value }))
       
    }
    const takeUserName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate,email: event.target.value }))
        
    }
    const takePassword = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, password: event.target.value }))
        
    }
    const takeMobile = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, mobileNo: event.target.value }))
    }
    

   
    const submit = () => {
        console.log(signupObj, "submit")
        let fullNameText = fullNameRegex.test(signupObj.fullName)
        let emailText = emailRegex.test(signupObj.email)
        let passwordText = passwordRegex.test(signupObj.password)
        let mobileText = mobileRegex.test(signupObj.mobileNo)

        if(fullNameText === false)
                {
                    setregexObj((prevState) => ({...prevState,fullNameBorder : true,fullNameHelper :"Enter correct email"}))
                }
                else if(fullNameText === true)
                {
                    setregexObj((prevState) => ({...prevState,fullNameBorder : false,fullNameHelper :""}))
                }
        
               

        if(emailText === false)
        {
            setregexObj((prevState) => ({...prevState,emailBorder : true,emailHelper :"Enter correct email"}))
        }
        else if(emailText === true)
        {
            setregexObj((prevState) => ({...prevState,emailBorder : false,emailHelper :""}))
        }

        if(passwordText === false)
        {
            setregexObj((prevState) => ({...prevState,passwordBorder : true,passwordHelper :"Enter correct password"}))
        }
        else if(passwordText === true)
        {
            setregexObj((prevState) => ({...prevState,passwordBorder : false,passwordHelper :""}))
        }
        if(mobileText === false)
        {
            setregexObj((prevState) => ({...prevState,mobileBorder : true,mobileHelper :"Enter correct mobile No"}))
        }
        else if(mobileText === true)
        {
            setregexObj((prevState) => ({...prevState,mobileBorder : false,mobileHelper :""}))
        }
                        
                if(fullNameText === true  &&emailText === true && passwordText === true && mobileText === true)
                {
                    signup(signupObj).then((response) =>{console.log(response) })
    
                    .catch((error) => {console.log(error)})
                }
               

        
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
                        <TextField size='small' variant="outlined" onChange={takeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper} 

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className='email'>
                        <span className='alldetails' >Email Id</span>
                        <TextField size='small' variant="outlined" onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className='password'>
                        <span className='alldetails'>Password</span>
                        <TextField size='small' variant="outlined" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />
                        <VisibilityOffIcon sx={{ marginLeft: 22, marginTop: -3 }} />


                    </Box>
                    <Box className='mobile'>
                        <span className='alldetails'>Mobile No</span> 
                        <TextField size='small' variant="outlined" onChange={takeMobile} error={regexObj.mobileBorder} helperText={regexObj.mobileHelper}

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