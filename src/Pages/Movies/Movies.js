import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Genres from '../../components/Genres/Genres';
import PageHeader from '../../components/Pageheader/PageHeader';
import CustomPagination from '../../components/Pagination/Pagination';
import SingleItem from '../../components/Singleitem/SingleItem';
import useGenre from '../../hooks/useGenre';

const Movies = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const today = new Date().toISOString().slice(0, 10);

    const getInitialState = () => {
        const sortBy = "popularity.desc";
        return sortBy;
    };
    
    const [sortBy, setSortBy] = useState(getInitialState);

    const handleChange = (e) => {
        setSortBy(e.target.value);
    }

    const getMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sortBy}&primary_release_date.lte=${today}&page=${page}&with_genres=${genreforURL}`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        getMovies();
        // eslint-disable-next-line
    }, [genreforURL, page, sortBy])

    return (
        <div>
            <PageHeader title='Movies' movieSort sortBy={sortBy} handleChange={handleChange} />
            <Genres 
                type='movie'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
                />
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
                        media_type='movie'
                        />
                )) }
            </div>
            {numOfPages > 1 && 
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            }
        </div>
    )
}

export default Movies;