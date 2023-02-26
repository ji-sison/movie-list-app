import React from 'react';
import { useEffect } from 'react';

//API url, hidden for security reasons


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
        <h1>Movie App </h1>
    )

}

export default App;
