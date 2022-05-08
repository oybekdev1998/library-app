import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AsideMenu from '../../components/AsideMenu/AsideMenu';

import styles from './Home.module.css';

const Home = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNavbar = () => {
    if(navbarOpen) {
      setNavbarOpen(false)
    }
    else {
      setNavbarOpen(true)
    }
  }
  return (
    <div>
      <Box className={styles.box} sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => handleNavbar()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'cyan'}}
          > 
            <MenuIcon />
            
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', color: 'cyan' }}>
            Library Assistant
          </Typography>
          <Button color="inherit" sx={{color: 'cyan'}}><Link to={'/loginPage'} >Kirish</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    {navbarOpen ? <AsideMenu /> : <></>}
    </div>
  )
}

export default Home