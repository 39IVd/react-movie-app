import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
            // Redirection
        }
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return (
                <div>
                    <h1 className="movie_title">{location.state.title}</h1>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <h3 className="movie_year">{location.state.year}</h3>
                    <ul className="movie_genres">
                        {location.state.genres.map(
                            (genre,index)=> (
                                <li key={index}
                                    className="genres_genre">
                                        {genre}
                                </li>
                            )
                        )}
                    </ul>
                    <div className="movie_rating">Rating : {location.state.rating}/10.0</div>
                    <div className="movie_summary">{location.state.summary}</div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}
export default Detail;