import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255, 255, 255, .1)',
            contrastText: '#fff',
        },
    },
});

const CustomPagination = ({setPage, numOfPages = 5}) => {
    const handlePageChange = (page) => {
        setPage(page);
    }
    return (
        <div className="pt30">
            <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                    <Pagination 
                    color="primary" 
                    count={numOfPages} 
                    onChange={(e) => handlePageChange(e.target.textContent)} />
                </Stack>    
            </ThemeProvider>
        </div>
        
    )
}

export default CustomPagination;