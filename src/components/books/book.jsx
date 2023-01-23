import { Box, Paper } from '@mui/material'
import React from 'react'
import bookObj1 from '../../images/GroupDiscussion.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './book.css';


function Book(props) {

    const bookObj = () => {
        props.listenToTakeBook()
    }


    return (
        <Paper elevation={1} onClick={bookObj}>
            <Box className='book1'>

                <Box style={{ backgroundColor: '#00000029' }} >
                    <img src={bookObj1} alt='' style={{ marginTop: '20px' }} />
                </Box>
                <Box style={{ alignItems: 'flex-start', display: 'flex', alignContent: 'flex-start', flexWrap: 'wrap', marginTop: '130px' }}>
                    <h5 className='name'>{props.book.bookName}</h5>
                    <h6 className='author'>By {props.book.author}</h6>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'center', marginLeft: '25px', marginTop: '-70px' }}><StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small', fontSize: '15px' }} /><h6 style={{ marginTop: '-20px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                        <h6 className='rates'>({props.book.quantity})</h6></Box>
                    <h6 className='rate'>Rs.{props.book.discountPrice}</h6>
                    <Box className='price'>
                        ({props.book.price})
                    </Box>
                </Box>

            </Box>

        </Paper>
    )
}

export default Book;


