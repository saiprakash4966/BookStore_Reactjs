import { Box, Paper } from '@mui/material'
import React from 'react'
import bookObj1 from '../../images/GroupDiscussion.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import './book.css';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    book1: {
        top: '130px',
        left: '170px',
        width: '240px',
        height: '275px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #E2E2E2',
        borderRadius: '3px',
        opacity: '1',
    },
    name: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: '-50%',
        marginLeft: '10%',

    },

    author: {
        width: '80%',
        display: 'flex',
        left: '10px',
        marginTop: '-40%',
        marginLeft: '10%',
    },

    rate: {
        marginTop: '-17%',
        marginLeft: '-17%',
    },
    price:
    {
        width: '36px',
        height: '13px',
        textAlign: 'left',
        textDecoration: 'line-through',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        marginLeft: '5%',
        marginTop: '-17%',
    },
    rates:
    {
        width: '18px',
        height: '13px',
        textAlign: 'left',
        font: 'normal normal normal 10px/13px Roboto',
        letterSpacing: '0px',
        color: '#878787',
        opacity: '1',
        marginLeft: '110%',
        marginTop: '-95%',
    },

})
function Book(props) {
    const classes = useStyles()

    const bookObj = () => {
        props.listenToTakeBook()
    }


    return (
        <Paper elevation={1} onClick={bookObj}>
            <Box className={classes.book1}>

                <Box style={{ backgroundColor: '#00000029' }} >
                    <img src={bookObj1} alt='' style={{ marginTop: '20px' }} />
                </Box>
                <Box style={{ alignItems: 'flex-start', display: 'flex', alignContent: 'flex-start', flexWrap: 'wrap', marginTop: '130px' }}>
                    <h5 className={classes.name}>{props.book.bookName}</h5>
                    <h6 className={classes.author}>By {props.book.author}</h6>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'center', marginLeft: '25px', marginTop: '-70px' }}><StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small', fontSize: '15px' }} /><h6 style={{ marginTop: '-20px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                        <h6 className={classes.rates}>({props.book.quantity})</h6></Box>
                    <h6 className={classes.rate}>Rs.{props.book.discountPrice}</h6>
                    <Box className={classes.price}>
                        ({props.book.price})
                    </Box>
                </Box>

            </Box>

        </Paper>
    )
}

export default Book;


