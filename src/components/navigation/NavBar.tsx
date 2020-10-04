import React, { FC, useState } from 'react';
import { AppBar as MuiAppBar, IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { WithTheme } from '../../themes';
import Drawer from './Drawer';

const AppBar = styled(MuiAppBar)<WithTheme>`
  background-color: ${(props) => props.theme.colors.primary} !important;
`;

const NavBar: FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleOpenClose = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleOpenClose}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer isOpen={isDrawerVisible} onClose={handleOpenClose} />
    </>
  );
};

export default NavBar;
