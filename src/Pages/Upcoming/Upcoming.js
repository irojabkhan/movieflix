
import React, { useState, useEffect } from 'react';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../hooks/useGenre';
import PageHeader from '../../components/Pageheader/PageHeader';
import axios from 'axios';
import SingleItem from '../../components/Singleitem/SingleItem';
import CustomPagination from '../../components/Pagination/Pagination';


const Upcoming = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const today = new Date().toISOString().slice(0, 10);

    const getMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&primary_release_date.gte=${today}&page=${page}&with_genres=${genreforURL}`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        getMovies();
        // eslint-disable-next-line
    }, [genreforURL, page])

    return (
        <div>
            <PageHeader title='Upcoming Movies' />
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

export default Upcoming;