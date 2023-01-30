import React from 'react';
// import './bookHeader.css';
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
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    bookhead: {
        width: '70vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        position: 'relative',
        left: '195px',
    },
    books: {
        marginLeft: '0%',
        fontSize: '20px',



    },
    total:
    {
        marginLeft: '-47%',
        fontSize: '12px'


    },
    ['@media only screen and (min-width:769px) and (max-width:1024px)']:
    {
        total:
        {

            marginLeft: '1%',
            fontSize: '10px',
            

        },

    },

})
function BookHeader() {
    const classes = useStyles()

    const [sort, setSort] = useState('');

    const handleClick = () => {
        setSort(!sort);
    }



    return (
        <Box className={classes.bookhead}>
            <Box className={classes.books}>Books</Box>

            <Box className={classes.total}>(128 items)</Box>

            <List
                sx={{ width: '80vw', height: '5vh', maxWidth: 250, bgcolor: 'background.paper', marginLeft: '200px', marginTop: '20px' }}
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
                    <ListItemText primary="Sort By relevance" className='sort' />
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