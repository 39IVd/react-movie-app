import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({id,title,year,genres,summary,poster,rating}) {
    return (
        <Link to={{
            pathname:`/movie/:${id}`,
            state: {
                title,
                year,
                genres,
                summary,
                poster,
                rating
            }
        }}>
             <div className="movie_container">
                <img src={poster} alt={title} title={title}/>
                <h1 className="movie_title">{title}</h1>
                <h3 className="movie_year">{year}</h3>
                <div className="movie_rating">Rating : {rating}/10.0</div>
                <ul className="movie_genres">
                    {genres.map(
                        (genre,index)=> (
                            <li key={index}
                                className="genres_genre">
                                    {genre}
                            </li>
                        )
                    )}
                </ul>
        </div>
        </Link>
       
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    summary: PropTypes.string,
    poster: PropTypes.string.isRequired
}

export default Movie;