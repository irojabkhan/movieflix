import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import './Genres.css';

const Genres = ({
    selectedGenres, 
    setSelectedGenres, 
    genres, 
    setGenres, 
    type, 
    setPage
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}`);

        setGenres(data.genres);
    }

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="genres">
            {
                selectedGenres && selectedGenres.map((genre) => (
                    <Chip 
                        label={genre.name} 
                        size='small' 
                        key={genre.id} 
                        clickable 
                        color= 'primary'
                        onDelete={() => handleRemove(genre)}
                        />
                ))
            }
            {
                genres && genres.map((genre) => (
                    <Chip 
                        label={genre.name} 
                        size='small' 
                        key={genre.id} 
                        clickable 
                        onClick={() => handleAdd(genre)}
                        />
                ))
            }
        </div>
    )
}

export default Genres;