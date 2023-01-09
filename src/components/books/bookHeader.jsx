import React from 'react';
import './bookHeader.css';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { FormControl } from '@mui/material';



function BookHeader() {
    
    const [sort, setSort] = useState('');
    

    const handleChange = (event) => {
        setSort(event.target.value);
      };
    return (
        <Box className='bookhead'>
             <Box className='books'>Books</Box>
             <FormControl   sx={{ m: 1, minWidth: 120 }} >
                <Select className='sort'
                value={sort}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="">
                    <em>sort by relevance</em>
                    
                </MenuItem>
                </Select>
            </FormControl> 
        </Box>
        
    );
}

export default BookHeader;