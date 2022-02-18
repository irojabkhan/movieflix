
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import './ItemDetails.css';

import {img_500, unavailable} from '../../config/config';

const ItemDetails = () => {
    const {id, media_type} = useParams();
    const [item, setItem] = useState(null);

    const fetchItem = async () => {
        const { data } =  await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setItem(data);
        console.log(data)
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchItem();
        // eslint-disable-next-line
    }, [media_type, id])

    return (
        item && (
            <div className='item__details'>
                <div className="item__thumb">
                    <img src={item.poster_path? `${img_500}/${item.poster_path}` : unavailable} alt="" />
                </div>
                <div className="item__content">
                    <h1 className="title">{item.title || item.name}</h1>
                    <p className='item__genres'>{item.genres.map((genre) => (
                        <span>{genre.name}</span>
                    ))}</p>
                    <p className='overview'>{item.overview}</p>
                    <p><strong>Date</strong>: {item.first_air_date || item.release_date}</p>
                    <p><strong>Language</strong>: {item.original_language}</p>
                    <p><strong>IMDB Rating</strong>: {item.vote_average}</p>
                    <p><strong>Media Type</strong>: {media_type == 'tv' ? 'Tv Series' : 'Movie'}</p>
                    <p><strong>Run Time</strong>: {item.runtime}</p>
                </div>
            </div>
        )
    )
}

export default ItemDetails;
