import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/Pageheader/PageHeader';
import SingleItem from '../../components/Singleitem/SingleItem';
import CustomPagination from '../../components/Pagination/Pagination';

const Trending = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        setLoading(true);
        const { data } =  await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
        setLoading(false);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <PageHeader title='Trending' />
            <div className="item__wrap">
                {loading ? '' : 
                    <>
                        {content && content.map((item) => (
                            <SingleItem 
                                key={item.id}
                                id={item.id}
                                title={item.title || item.name}
                                poster={item.poster_path}
                                date={item.first_air_date || item.release_date}
                                overview={item.overview}
                                vote_average={item.vote_average}
                                media_type={item.media_type}
                                />
                        ))}
                    </>
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending;