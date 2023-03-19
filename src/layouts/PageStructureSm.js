import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const drawerWidth = '300px';

function ResponsiveDrawer(props) {

    const { window } = props;
    const drawerOpen = useSelector((state) => state.navigation.open);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch({ type: 'navigation/openMenu' });
    };

    const handleDrawerClose = () => {
        dispatch({ type: 'navigation/closeMenu' });
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: { sm: 'flex', lg:'none' } }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Header />
                </Toolbar>
            </AppBar>
            <Box component="nav" aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary" 
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        }
                    }}
                    sx={{
                        display: {sm:'block', lg:'none'}
                      }}>
                    <Toolbar />
                    <Divider />
                    {props.drawerContent}
                </Drawer>
            </Box>
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    p: 3 //padding
                }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;