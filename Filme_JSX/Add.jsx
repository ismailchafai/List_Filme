import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard';
export default function Add() {
    const [searchValue  , setSearchValue] = useState("");
    const [movies , setMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=b53de132`)
        .then((response)=>{
            if(response.data.Search){
                setMovies(response.data.Search)
            }
        })
        .catch((error)=>console.log(error))
    },[searchValue])
  return (
            <div className='container ' style={{width:'700px'}}>                       
                <div className="input-group m-auto" style={{width:'100%'}}>
                    <input type="text" className="form-control input-control m-4" placeholder="Seaarch for a movie" 
                    value={searchValue} onChange={e=>setSearchValue(e.target.value)}/>
                </div >
                
                   {movies.length > 0  && (
                   <ul className='results m-auto'>
                    {movies.map((movie)=>(
                    <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>))}
                </ul>)}
            </div>
      
  )
}
