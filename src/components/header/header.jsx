import  React from 'react';
import './header.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import img  from "./education.svg";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    left: '12%' ,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      
        },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    color:'#9D9D9D',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '38vw',
    },
    
    
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color:'#9D9D9D',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FCFCFC',
    ['@media only screen and (min-width :481px) and (max-width :768px)']:{
      zIndex:'1',
    }
    
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      backgroundColor:'#FCFCFC',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '32vw',
        position:'relative',
        left:'4%',
        borderRadius:"2px",
        
      }
  },
    
  }));

function Header() {
  
    return (
      <Box>
        <Box sx={{ flexGrow: 1 , width:'100vw'}}>
        <AppBar position="static" backgroundColor='#A03037'>
          <Toolbar sx={{backgroundColor:'#A03037'}}>
          
            <Typography
              variant=""
              noWrap
              component="div"
              className='book'
            >   
             <img  src={img} alt="img"  className='image'  />
              Bookstore
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, }} />
            <Box className='icon' >
              <Button size="extra-large" aria-label="show 4 new mails" variant="contained"  color="inherit" sx={{backgroundColor:'#A03037'}}>
                  <PermIdentityOutlinedIcon sx={{ fontSize: 30  }} />
                  
              </Button>
              
                <Button size="large" color="inherit" variant="contained" sx={{backgroundColor:'#A03037'}} onClick=''>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }}  />
                </Button>
             
              
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        
      </Box>
           
    </Box>
    );
    
}

export default Header;