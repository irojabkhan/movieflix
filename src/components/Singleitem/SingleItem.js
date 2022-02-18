import React from 'react'
import {img_300, unavailable} from '../../config/config';

import Badge from '@mui/material/Badge';

import './SingleItem.css';
import { Link } from 'react-router-dom';

const SingleItem = ({
    id,
    poster,
    date,
    title,
    overview,
    vote_average,
    media_type
}) => {
    return (
        <Link to={`/${media_type}/${id}`}>
            <div className="single__item" id={id}>
                <Badge 
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    badgeContent={vote_average} 
                    color={vote_average>7 ? 'primary' : 'secondary'} 
                    />
                <div className="thumb">
                    <img src={poster? `${img_300}/${poster}` : unavailable} alt="" />
                    <div className="overlay__bg"></div>
                    <div className="overlay">
                        <h4>Overview</h4>
                        <p>
                            {
                                overview.length > 50? `${overview.slice(0, 100)}...` : overview
                            }
                        </p>
                    </div>
                </div>
                <div className="item__body">
                    <h3>{title}</h3>
                    <div className="meta">
                        <p>{media_type === 'tv' ? 'TV Series' : 'Movie'}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default SingleItem;