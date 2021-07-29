import React , {useState ,useEffect } from 'react'
import url from './axios'
import '../css/type.css'
import {Link} from 'react-router-dom' ;
import request from './request'
import {useDispatch} from 'react-redux'
import {fetchMovies} from '../redux/reducer'

function Type(props){
    const [movies , setMovies] = useState([]) ;
    const dispatch = useDispatch() ;
    useEffect(()=>{
        function fetchData(){
            url.get(props.url)
                .then(res=>{
                    if(props.url==request.Trending){
                        dispatch(fetchMovies(res.data.results))
                    }
                    setMovies(res.data.results)
                })
        }
        fetchData() 
    },[]) 
    
    return (
        <div className="type"> 
            {movies.length>0 && <h1>{props.title}</h1>}
            <div>
                {movies.map(movie=>(
                    
                    <Link to={{
                            pathname : "/search" ,
                            state : {
                                movie
                            }
                            }}
                            onContextMenu={() => localStorage.setItem("movie", JSON.stringify(movie))} 
                    >
                        <div>
                            <img 
                                key={movie.id}
                                src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                                alt={movie.title}
                            />  
                        </div>
                    </Link>
                    
                ))}
            </div>
            
        </div>
    )
}

export default Type
