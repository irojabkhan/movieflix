import React from 'react';
import './PageHeader.css';

function PageHeader(props) {

    return (
        <div className="page__header">
            <h2>{props.title}</h2>
            {props.movieSort && (
                <div className="custom__select">
                    <select value={props.sortBy} onChange={props.handleChange}>
                        <option value="popularity.desc">popularity</option>
                        <option value="popularity.asc">popularity asc</option>
                        <option value="release_date.desc">release</option>
                        <option value="release_date.asc">release asc</option>
                        <option value="vote_average.desc">Rating</option>
                        <option value="vote_average.asc">Rating asc</option>
                        <option></option>
                    </select>
                </div>
            )}
            {props.tvSort && (
                <div className="custom__select">
                    <select value={props.sortBy} onChange={props.handleChange}>
                        <option value="popularity.desc">popularity</option>
                        <option value="popularity.asc">popularity asc</option>
                        <option value="first_air_date.desc">First Air </option>
                        <option value="first_air_date.asc">First Air asc</option>
                        <option value="vote_average.desc">Rating</option>
                        <option value="vote_average.asc">Rating asc</option>
                        <option></option>
                    </select>
                </div>
            )}
        </div>
    )
}

export default PageHeader;
