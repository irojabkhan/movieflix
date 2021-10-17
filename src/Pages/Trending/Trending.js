import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/Pageheader/PageHeader';
import SingleItem from '../../components/Singleitem/SingleItem';

const Trending = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);

        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [])

    return (
        <div>
            <PageHeader title='Trending' />
            <div className="item__wrap">
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
            </div>
        </div>
    )
}

export default Trending;