import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const drawerWidth = '300px';

const Main = styled('main')(
    ({ theme}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: 0,
    }),
);

const AppBar = styled(MuiAppBar)(() => ({
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth,       
        }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function PersistentDrawerLeft(props) {
    return (
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <AppBar position="fixed">
                <Toolbar />
            </AppBar>
            <Drawer
                PaperProps={{
                    sx: {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    }
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                variant="persistent"
                anchor="left"
                open>
                <DrawerHeader>
                    <Header />
                </DrawerHeader>
                <Divider />
                {props.drawerContent}
            </Drawer>
            <Main>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}