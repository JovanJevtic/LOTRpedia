import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Movie from "./components/Movie";

const Lotrpedia = () => {
    
    const [someData, setSomeData] = useState([]);
    const { data: movies, isLoading, error } = useFetch(`https://the-one-api.dev/v2/movie`);

    return (
        <div>
            <p>Lotrpedia</p>

            <h1>Lotr Movies</h1>
            { movies && <p>Total: {movies.total}</p> }
            <div className="lotr-movies">
                { isLoading && 'Lo  ading...' }
                { error && `Something went wrong: ${error}` }
                { movies && movies.docs && movies.docs.map(movie => (
                    <Movie key={movie._id} movie={movie} />
                )) }
            </div> 
        </div>
    )
}

export default Lotrpedia;