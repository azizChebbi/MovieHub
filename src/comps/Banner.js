import React , {useEffect , useState} from 'react'
import url from './axios'
import request from './request'
import '../css/banner.css'
import {Link} from 'react-router-dom'


function Banner() {
    const [movie , setMovie] = useState() ;
    useEffect(()=>{
        function fetchData(){
            url.get(request.Pub).then(res=>{
            const movies = res.data.results ;
            setMovie(movies[Math.floor(Math.random()*movies.length-1)])
            //movies[Math.floor(Math.random()*movies.length-1)]
            console.log("movie")
            console.log(movies[Math.floor(Math.random()*movies.length-1)])
            console.log("movie")

            }) ;
            
            
        }
        fetchData() 
        
    },[])
    return (
        <header className="banner"
            style={{
               
                backgroundSize : 'cover' ,
                backgroundImage : `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`
            }}
        >
            <nav>
                <h2>NETFLIX</h2>
                <div>
                    <Link className="search-link" to="/movies">movie</Link>
                    <Link className="search-link" to="/series">serie</Link>
                </div>
            </nav>
            <div>
                {movie &&<>
                    <h1>{movie.original_name}</h1>
                    
                </>  
                }
            </div>
        </header>
    )
}

export default Banner
//movie-trailer
//react-youtube