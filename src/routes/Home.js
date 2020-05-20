import React, {Component} from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

// npm install axios

class Home extends Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        console.log(movies);

        this.setState({movies: movies, isLoading: false});
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state;
        const movieList = movies.map((movie) => (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}/>
        ));
        return (
            <section className="container">
                {
                    isLoading
                        ? <div className="loading">Loading...</div>
                        : <div className="movies">{movieList}</div>
                }
            </section>
        )
    }
}
export default Home;