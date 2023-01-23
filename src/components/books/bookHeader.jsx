import React from 'react';
import './bookHeader.css';
import Box from '@mui/material/Box';
import { useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



function BookHeader() {

    const [sort, setSort] = useState('');

    const handleClick = () => {
        setSort(!sort);
    }



    return (
        <Box className='bookhead'>
            <Box className='books'>Books</Box>

            <List
                sx={{ width: '80vw', height : '5vh', maxWidth: 250, bgcolor: 'background.paper', marginLeft: '200px', marginTop: '20px' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">

                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Sort By relevance" />
                    {sort ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={sort} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="Sort By relevance" />
                        </ListItemButton>
                    </List>
                </Collapse>
                
            </List>

        </Box>

    );
}

export default BookHeader;