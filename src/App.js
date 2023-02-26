import React from 'react';
import { useEffect } from 'react';

//API from www.omdbapi.com
//API key, hidden for security reasons
const API_URL = 'http://www.omdbapi.com?apikey='

const movie = {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt2586634",
    "Type": "Movie",
    "Poster": "N/A"

}

const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); 

        console.log(data.Search);
    }

    useEffect(()=> {
        searchMovie("Spiderman")
    }, []);

    return ( 
        <div className="app">
            <h1>MovieDB</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value="Avengers"
                    onChange={() => {}}
                />
            </div>

            <div className="container">
                <div className="movies">
                    <div>
                        <p>{movie.Year}</p>
                    </div>

                    <div>
                        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
                    </div>
                </div>
                
            </div>

            <div>
                <span> {movie.Type} </span>
                <h3> {movie.Title} </h3>
            </div>

        </div>
    )

}

export default App;
