import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
import ChickenIcon from '../assets/ChickenIcon';

export default function Header() {
    return (
        <Link variant="inherit" color="inherit" underline='none' component={RouterLink} to="/">
            <Box sx={{ display: 'inline-flex', alignItems: 'flex-end', p: 0.5 }}>
                <ChickenIcon sx={{ fontSize: 50, mr: 2, mb: 1 / 5 }} />
                <Box sx={{ fontSize: 27, fontFamily:'sans-serif', mb: -1/2 }}>CODE COUTO</Box>
            </Box>
        </Link>
    )
}