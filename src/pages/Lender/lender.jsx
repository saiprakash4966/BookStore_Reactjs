import React, { useState } from 'react';
import './lender.css';
import Box from '@mui/material/Box';
import image1 from '../Lender/component.png';
import Paper from '@mui/material/Paper';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    background: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',



    },

    imagebox: {
        width: '30%',
        height: '45%',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: '5%',

    },

    image1: {
        width: '40%',
        height: '60%',
        borderRadius: '50%',
        marginLeft: '-30%',
    },


    imageboxp: {
        marginLeft: '-25%',
        textAlign: 'center',
        font: 'normal normal medium 18px/24px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'uppercase',
        opacity: '1',

    },
    ['@media only screen and (min-width : 320px) and (max-width : 480px)']:
    {
        background: {
            width: '100vw',
            height: '100vh',




        },
        image1: {
            width: '60%',
            height: '60%',
            marginLeft: '-20%',

        },
        imagebox: {
            width: '50%',
            height: '35%',
            marginLeft: '-20%',


        },
        imageboxp: {

            textAlign: 'center',
            fontSize: '8px',
            marginLeft: '-18%',
            marginTop: '15%',

        },
        
    },
    ['@media only screen and (min-width : 481px) and (max-width : 768px)']:
    {
        background: {
            width: '100vw',
            height: '100vh',




        },
        image1: {
            width: '60%',
            height: '60%',
            marginLeft: '-10%',

        },
        imagebox: {
            width: '50%',
            height: '45%',
            marginLeft: '-25%',
            marginTop : '5%',


        },
        imageboxp: {

            textAlign: 'center',
            fontSize: '10px',
            marginLeft: '-10%',
            marginTop: '15%',

        },
        
    },
    ['@media only screen and (min-width : 769px) and (max-width : 1024px)']:
    {
        background: {
            width: '100vw',
            height: '100vh',




        },
        image1: {
            width: '60%',
            height: '60%',
            marginLeft: '-10%',

        },
        imagebox: {
            width: '40%',
            height: '45%',
            marginLeft: '-20%',
            marginTop : '-1%',


        },
        imageboxp: {

            textAlign: 'center',
            fontSize: '13px',
            marginLeft: '-10%',
            marginTop: '15%',

        },
        
    }





})


function Lender() {
    const classes = useStyles()
    const [toggle, setToggle] = useState(false)

    const listenToSignIn = () => {
        setToggle(true)
    }


    const listenToSignUp = () => {
        setToggle(false)
    }






    return (
        <div>
            <Paper className={classes.background} sx={{ backgroundColor: '#9e9e9e' }}>
                <Box className={classes.imagebox}>
                    <img className={classes.image1} id='image1' src={image1} alt="image1" width='10%' height='10%' />
                    <p className={classes.imageboxp}>Online Book Shopping</p>
                </Box>
            </Paper>
            {
                toggle ? <SignUp listenToSignUp={listenToSignUp} /> : <SignIn listenToSignIn={listenToSignIn} />
            }

        </div>




    );
}

export default Lender;