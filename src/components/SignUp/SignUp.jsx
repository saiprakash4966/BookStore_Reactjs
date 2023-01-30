import React from 'react';
// import './SignUp.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signup } from '../../services/userService';
import { makeStyles } from '@mui/styles';

const fullNameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^([6-9]{1}[0-9]{9})$/;

const useStyles = makeStyles ({

    Maincolor: {
        width: '20vw',
        height:'55vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '55%',
        marginTop: '-38%',
    },
    
    
    
    
    displayone: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    
    signup: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-between',
        alignItems: 'center',
        left : '10%',
        
    },
    
    other :{
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignItems: 'center',
        marginTop: '130%',
        marginLeft : '-100%',
    
    },
    
    
    
    alldetails: {
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1',
       
    },
    
    detail :{
        width: '100%',
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '-5%',
    
    },
    
    
    fullname :{
        width: '70%',
        height: '-90%',
        marginBottom: '7%',
        display: 'flex',
        flexDirection: 'column',
    },
    email : {
        width: '70%',
        height: '-90%',
        marginBottom: '7%',
        display: 'flex',
        flexDirection: 'column',
    },
    password: {
        width: '70%',
        height: '-90%',
        marginBottom: '7%',
        display: 'flex',
        flexDirection: 'column',
    },
    mobile : {
        width: '70%',
        height: '-90%',
        marginBottom: '7%',
        display: 'flex',
        flexDirection: 'column',
    },
    ['@media only screen and (min-width:320px) and (max-width:480px) ']:{
        Maincolor :
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
       signup : {
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
    other : 
    {
        marginTop : '180%',

    },
    alldetails : 
    {
        marginTop : '-15%'

    }
    },
    ['@media only screen and (min-width:481px) and (max-width:768px)'] :{
        Maincolor :
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
        // alldetails : {
        //     width: '100%',
        //     height: '43%',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'space-between',
        //     alignContent: 'center',
        //     alignItems: 'center',
        //     marginLeft: '-3%',
        //     marginTop : '-5%',
    
    
        // },
        other : 
        {
            marginTop : '150%',
        }

      },
      ['@media only screen and (min-width:769px) and (max-width:1024px)'] :{
        Maincolor :
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
        
        other : 
        {
            marginTop : '150%',
        }

      },


})

function SignUp(props) {
    const classes = useStyles()

    const [signupObj, setsignupObj] = React.useState({ fullName: "", email: "", password: "", phone: "" })

    const [regexObj, setregexObj] = React.useState({
        fullNameBorder: false, fullNameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "", phoneBorder: false, phoneHelper: "",
    })
    const takeFullName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, fullName: event.target.value }))

    }
    const takeUserName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, email: event.target.value }))

    }
    const takePassword = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, password: event.target.value }))

    }
    const takePhone = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, phone: event.target.value }))
    }
    const openSignin = () => {
        props.listenToSignUp()
    }
    const Signup = () => {
        props.listenToSignIn()

    }




    const submit = () => {
        console.log(signupObj, "submit")
        let fullNameText = fullNameRegex.test(signupObj.fullName)
        let emailText = emailRegex.test(signupObj.email)
        let passwordText = passwordRegex.test(signupObj.password)
        let phoneText = phoneRegex.test(signupObj.phone)

        if (fullNameText === false) {
            setregexObj((prevState) => ({ ...prevState, fullNameBorder: true, fullNameHelper: "Enter correct Name" }))
        }
        else if (fullNameText === true) {
            setregexObj((prevState) => ({ ...prevState, fullNameBorder: false, fullNameHelper: "" }))
        }



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
        if (phoneText === false) {
            setregexObj((prevState) => ({ ...prevState, phoneBorder: true, phoneHelper: "Enter correct mobile No" }))
        }
        else if (phoneText === true) {
            setregexObj((prevState) => ({ ...prevState, phoneBorder: false, phoneHelper: "" }))
        }

        if (fullNameText === true && emailText === true && passwordText === true && phoneText === true) {
            signup(signupObj).then((response) => { console.log(response) })

                .catch((error) => { console.log(error) })
        }



    }





    return (
        <Paper className={classes.Maincolor} sx={{ backgroundColor: '#9e9e9e' }}>
            <Box className={classes.displayone}>
                <Box className={classes.signup}>
                    <h3 style={{ color: '#878787' }} onClick={openSignin}>LOGIN</h3>
                    <h3 onClick={Signup}>SIGNUP</h3>
                </Box>
                <Box className={classes.detail} >

                    <Box className={classes.fullname}>
                        <span className={classes.alldetails}>Full Name</span>
                        <TextField size='small' variant="outlined" onChange={takeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className={classes.email}>
                        <span className={classes.alldetails} >Email Id</span>
                        <TextField size='small' variant="outlined" onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </Box>
                    <Box className={classes.password}>
                        <span className={classes.alldetails}>Password</span>
                        <TextField size='small' variant="outlined" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />
                        <VisibilityOffIcon sx={{ marginLeft: 22, marginTop: -3 }} />


                    </Box>
                    <Box className={classes.mobile}>
                        <span className={classes.alldetails}>Mobile No</span>
                        <TextField size='small' variant="outlined" onChange={takePhone} error={regexObj.phoneBorder} helperText={regexObj.phoneHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />



                    </Box>




                </Box>











            </Box>
            <Box className={classes.other}>
                <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={submit}>Signup</Button>
            </Box>

        </Paper>


    );
}

export default SignUp;