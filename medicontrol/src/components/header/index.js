import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";


const ImagemEstilizada = styled.img`
width: 100px;
height: 100px;
`


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5CCEEE' }}>
      <Toolbar>
        {/* Avatar in the left corner */}
        <IconButton edge="start" color="inherit" aria-label="avatar">
          <Avatar alt="img perfil" src="perfil_enfermeira.jpg" />
        </IconButton>

        {/* Image in the middle */}
        <Box flexGrow={1} display="flex" justifyContent="center">
          <ImagemEstilizada src='LogoMedi_semfundo.png' alt="logo medicontrol" style={{ height: '80px' }} />
        </Box>

        {/* Menu in the right corner */}
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Atividades</MenuItem>
          <MenuItem onClick={handleMenuClose}>Pacientes</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
