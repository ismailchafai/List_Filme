import React from 'react'
import * as actions from '../Film_context/ActionTypes'
import { useMovieContext } from '../Film_context/GlobalContext';

export default function ResultCard({movie}) {
    const MovieContext = useMovieContext();
    const storedMovie = MovieContext.watchlist.find(
        (o)=>o.imdbID === movie.imdbID
    );
    const storedMovieWatched = MovieContext.watched.find(
        (o) => o.imdbID === movie.imdbID
    )
    const WatchlistDisabled = storedMovie ? true  
    : storedMovieWatched ? true :false ;
    const WatchedDisabled = storedMovieWatched ? true : false ;
  return (
    <div className='result-card'>
        <div className="poster-wrapper">
            {movie.Poster ? (
                <img src={movie.Poster} alt="movie.Title" />
            ):(
                <div className="filter-poster"></div>
            )}
        </div>
        <div className="info">
            <div className="heading">
                <h3 className="title">
                    {movie.Title}
                </h3>
            {movie.Year ? <h4 className='release-date'>{movie.Year}</h4>:"-"}
            </div>
            <div className="controls">
                <button onClick={()=>{
                    MovieContext.MoviesDispatch({
                        type: actions.ADD_MOVIE_TO_WATCHLIST,
                        payload: movie ,
                    })
                }}  className="btn mx-2"
                disabled={WatchlistDisabled}>Add to WatchList</button>
                <button onClick={()=>{
                    MovieContext.MoviesDispatch({
                        type: actions.ADD_MOVIE_TO_WATCHED,
                        payload: movie ,
                    })
                }} className="btn"
                disabled={WatchedDisabled}>Add to Watch</button>
            </div>
        </div>
    </div>
  )
}
