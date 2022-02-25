import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres/Genres';
import PageHeader from '../../components/Pageheader/PageHeader';
import CustomPagination from '../../components/Pagination/Pagination';
import SingleItem from '../../components/Singleitem/SingleItem';
import useGenre from '../../hooks/useGenre';

const Series = () => {
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

    const getSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=96fd58ecd16e1528d2b51894a6fd6555&sort_by=${sortBy}&first_air_date.lte=${today}&page=${page}&with_genres=${genreforURL}`);
        
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        getSeries();
        // eslint-disable-next-line
    }, [genreforURL, page, sortBy])

    return (
        <div>
            <PageHeader title='TV Series' tvSort sortBy={sortBy} handleChange={handleChange} />
            <Genres 
                type='tv'
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
                        title={item.name}
                        poster={item.poster_path}
                        date={item.first_air_date}
                        overview={item.overview}
                        vote_average={item.vote_average}
                        media_type='tv'
                        />
                )) }
            </div>
            {numOfPages > 1 && 
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            }
        </div>
    )
}

export default Series;