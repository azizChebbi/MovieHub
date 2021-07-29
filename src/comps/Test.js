import React from 'react'
import {useSelector} from 'react-redux'

function Test() {
    const movies = useSelector(state=>state.movies)
    return (
        <div>
            {movies.map(movie=>(
                <h1 style={{color:'white'}}>{movie}</h1>
            ))}
        </div>
    )
}

export default Test
