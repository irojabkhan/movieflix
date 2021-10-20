import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/Pageheader/PageHeader';
import CustomPagination from '../../components/Pagination/Pagination';
import SingleItem from '../../components/Singleitem/SingleItem';

const Movies = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();


    const fetchMovie = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=96fd58ecd16e1528d2b51894a6fd6555&page=${page}`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovie();
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <PageHeader title='Movies' />
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
                )) }
            </div>
            {numOfPages > 1 && 
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            }
        </div>
    )
}

export default Movies;