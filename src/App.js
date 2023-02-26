import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from "./icons8-search.svg";


//API from www.omdbapi.com
//API key, hidden for security reasons
const API_URL = 'http://www.omdbapi.com?apikey='

//test
// const movie = {
//     "Title": "Avengers: Endgame",
//     "Year": "2019",
//     "imdbID": "tt2586634",
//     "Type": "Movie",
//     "Poster": "N/A"

// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); 

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovie("Avengers")
    }, []);

    return ( 
        <div className="app">
            <h1>MovieDB</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}               
                />
            </div>

            {/*check if movies is empty  */}
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie = {movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }


        </div>
    )
}

export default App;