import React from 'react';
import './book.css';
import img  from "./Image 36.png";
import Box from '@mui/material/Box';





function Book() {
   

    
    
    return (
                 
            <Box className='box' >
                
                    <img className='ibox' src={img} alt="img"/>
                    <Box className='notes' item xs={4}>
                        <span className='h1'>bookName</span>
                        <span className='h2'>book author</span>
                        <span className='rating'>
                       
                        </span>
                        
                    </Box>
                   
           </Box> 
           
         
    );
}

export default Book;