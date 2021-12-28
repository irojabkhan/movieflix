import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push('/');
        else if (value === 1) history.push('/movies');
        else if (value === 2) history.push('/series');
        else if (value === 3) history.push('/search');
    }, [value, history])
    

    return (
        <Box>
            <BottomNavigation
                sx={{ background: '#e50914', color: '#fff', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{color: '#fff'}} />
                <BottomNavigationAction label="Movie" icon={<MovieIcon />} style={{color: '#fff'}}  />
                <BottomNavigationAction label="TV Series" icon={<TvIcon />} style={{color: '#fff'}}  />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{color: '#fff'}}  />
            </BottomNavigation>
        </Box>
    );
}