import { useState } from "react";

const Movie = ({ movie }) => {
    
    const [detailsShow, setDetailsShow] = useState(false);

    const toggleDetailsVisibility = () => {
        setDetailsShow(!detailsShow);
    }
    
    return(
        <div>
            <h3>{movie.name}</h3>
            <div className="details-wrapp">
                <button onClick={toggleDetailsVisibility}>{ detailsShow ? 'Hide details' : 'Show details' }</button>

                <div style={{display: detailsShow ? 'block' : 'none'}} className="details">
                    <p>Academy award nominations: {movie.academyAwardNominations}</p>
                    <p>Academy award wins: {movie.academyAwardWins}</p>
                    <p>BoxOffice revenue in millions: {movie.boxOfficeRevenueInMillions}</p>
                    <p>Budget in millions: {movie.budgetInMillions}</p>
                    <p>RottenTomatoes score: {movie.rottenTomatoesScore}</p>
                    <p>Runtime in minutes: {movie.runtimeInMinutes}</p>
                </div>
            </div>
        </div>
    );
}

export default Movie;