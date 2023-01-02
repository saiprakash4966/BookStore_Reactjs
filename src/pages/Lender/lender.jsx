import React, { useState } from 'react';
import './lender.css';
import Box from '@mui/material/Box';
import image1 from '../Lender/component.png';
import Paper from '@mui/material/Paper';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';




function Lender() {
    const [toggle, setToggle] = useState(false)

    const listenToSignIn = () => {
        setToggle(true)
    }


    const listenToSignUp = () => {
        setToggle(false)
    }

    




    return (
        <div>
            <Paper className='background' sx={{ backgroundColor: '#9e9e9e' }}>
            <Box className='imagebox'>
                <img className='image1' id='image1' src={image1} alt="image1" width='10%' height='10%' />
                <p className='imgboxp'>Online Book Shopping</p>
            </Box>
        </Paper>
        {
            toggle ? <SignUp listenToSignUp ={listenToSignUp}/> : <SignIn listenToSignIn = {listenToSignIn} />
        }

        </div>
        

        

    );
}

export default Lender;