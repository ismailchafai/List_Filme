import React from 'react'
import MovieControls from './MovieControls'
export default function MovieCard({movie , type}) {
  return (
    <div className='movie-card'>
      <i class="bi bi-backspace-reverse-fill"></i>
        <div className="overlay">
            {movie.Poster ? (<img src={movie.Poster} alt={movie.Title}/>
            ):(
                <div className='filter-poster'></div>
            )}
            <MovieControls movie={movie} type={type}/>
            
        </div>
    </div>
  )
}
