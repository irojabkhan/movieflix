import { Button, Tab, Tabs, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/Pageheader/PageHeader';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import axios from 'axios';
import SingleItem from '../../components/Singleitem/SingleItem';
import CustomPagination from '../../components/Pagination/Pagination';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}  

const Search = () => {
    const [value, setValue] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPage(1);
    }

    const fetchSearch = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${value ? 'movie' : 'tv'}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}`)

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
    }, [value, page]);

    return (
        <div>
            <PageHeader title='Search' />
            <div style={{display: 'flex', marginTop: 15, marginBottom: 15}}>
                <TextField
                    style={{flex: 1}}
                    className="searchBox"
                    label="search"
                    variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                <Button 
                    variant="contained" 
                    style={{marginLeft: 20}}
                    onClick={fetchSearch}
                    >
                    <SearchIcon />
                </Button>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Moive" />
                        <Tab label="Tv Series" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="item__wrap">
                        { content && content.map((item) => (
                            <SingleItem 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                poster={item.poster_path}
                                date={item.release_date}
                                overview={item.overview}
                                vote_average={item.vote_average}
                                media_type={item.media_type}
                                />
                        ))}
                        {searchText && !content && (value ? <h2>No Movie</h2> : <h2>No Movie Found</h2>)}
                    </div>
                    {numOfPages > 1 && 
                        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Box>
        </div>
    )
}

export default Search;