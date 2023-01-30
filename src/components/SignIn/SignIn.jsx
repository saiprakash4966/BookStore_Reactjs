import React from 'react';
// import './SignIn.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { login, loginApi } from '../../services/userService';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles'




const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    color : {
        width: '20vw',
        height: '55vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '55%',
        marginTop: '-38%',
    
    },
    
    display : {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    
    login : {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-between',
        alignItems: 'center',
        left: '10%',
    
    },
    
    others: {
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    
    
    },
    
    fbgoogle : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'space-around',
        width: '78%',
        marginLeft: '12%',
        marginTop: '-5%',
    
    
    
    
    
    },
    
    emailpass : {
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1',
    
    },
    
    details :{
        width: '100%',
        height: '43%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        top: '-15%',
    
    
    },
    
    
    email : {
        width: '70%',
        height: '-90%',
        marginBottom: '5%',
        display: 'flex',
        flexDirection: 'column',
    },
    password : {
        width: '70%',
        height: '-90%',
        marginBottom: '5',
        display: 'flex',
        flexDirection: 'column',
    },
    
    forgot : {
        textAlign: 'right',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#9D9D9D',
        marginLeft: '30%',
    
    
    },
    ['@media only screen and (min-width:320px) and (max-width:480px) ']:{
         color :
        {
            width: '45vw',
            height: '42vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#9e9e9e',
            marginLeft: '50%',
            marginTop : '-147%',
        },

        // display :{
        //     width: '100%',
        //     height: '85%',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     flexWrap: 'wrap',
        //     backgroundColor: 'white'
        // },
    
        login : {
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'space-between',
            alignItems: 'center',
            marginLeft: '-2%',
            fontSize: '7.5px',
            marginTop: '-3%',
    
        },
        
    
        others : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '-2%',
            marginTop : '0%',
    
    
        },
        
    
        
    
        details : {
            width: '100%',
            height: '43%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: '-2%',
            marginTop : '-10%',
    
    
        },
        fbgoogle : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'space-around',
            width: '10%',
            marginLeft: '-50%',
            marginTop: '160%',
            
        
        
        
        
        
        },
        
        
        

      },

      ['@media only screen and (min-width:481px) and (max-width:768px)'] :{
        color :
        {
            width: '45vw',
            height: '52vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#9e9e9e',
            marginLeft: '50%',
            marginTop : '-100%',
        }, 
        details : {
            width: '100%',
            height: '43%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: '-3%',
            marginTop : '-5%',
    
    
        },
        others : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '-3%',
            marginTop : '0%',
    
    
        },

      },
      ['@media only screen and (min-width:769px) and (max-width:1024px) '] :{
        color :
        {
            width: '30vw',
            height: '52vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#9e9e9e',
            marginLeft: '50%',
            marginTop : '-65%',
        }, 
        details : {
            width: '100%',
            height: '43%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: '-3%',
            marginTop : '-5%',
    
    
        },
        others : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '-3%',
            marginTop : '0%',
    
    
        },

      },
    
    
})


function SignIn(props) {
    const classes = useStyles()
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
    const signIn = () => {
        props.listenToSignup()

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
            login(signInObj).then((response) => {
                console.log(response)
                ;localStorage.setItem('token', response.data.result.accessToken);
            })

                .catch((error) => { console.log(error) })
        }
    }




    return (
        <Paper className={classes.color} sx={{ backgroundColor: '#9e9e9e' }}>

            <Box className={classes.display}>
                <Box className={classes.login}>
                    <h3 onClick={signIn}>LOGIN</h3>
                    <h3 style={{ color: '#878787' }} onClick={openSignup}>SIGNUP</h3>
                </Box>
                <Box className={classes.details}  >
                    <Box className={classes.email}>
                        <span className={classes.emailpass}>Email Id</span>
                        <TextField id="email" size='small' variant="outlined" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}  sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />
                    </Box>
                    <Box className={classes.email}>
                        <span className={classes.emailpass}>Password</span>
                        <TextField size='small' variant="outlined" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} sx={{ width: '100%', borderRadius: '2px', height: '30px' }} />

                        <VisibilityOffIcon  classname={classes.visible}sx={{ marginLeft: 22, marginTop: -3 }} />
                        <p className={classes.forgot}>Forgot password?</p>
                    </Box>
                </Box>
                <Box className={classes.others}>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Login</Button>
                    <h5>OR</h5>
                </Box>
                <Box className={classes.fbgoogle}>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="contained" sx={{ color: 'black', backgroundColor: '#f5f5f5' }}>Google</Button>
                </Box>

            </Box>

        </Paper>

    );
}

export default SignIn;