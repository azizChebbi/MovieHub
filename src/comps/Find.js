import React, {useState,  useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../css/find.css'
import {useSelector} from 'react-redux'


function Find() {
    const [title , setTitle] = useState('') ;
    const [movies , setMovies] = useState([]) ;
    const data = useSelector(state=>state.movies) 
    useEffect(()=>{
        setMovies(data)
    },[])
    
    const search = async val=>{
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f2fbf5dbeb1cfe62abc130da10bdc838&query=${val}`)
        const movie_list = await res.data.results ;
        setMovies(movie_list) ;
    }
    
    const onChangeHandler = (e)=>{
        setTitle(e.target.value) ;
    }
    return (
        <div className="find">
            <nav>
                <h2>NETFLIX</h2>
                <Link className="film-link" to="/show">Enjoy</Link>
            </nav>
            <div className="first">
                <input
                    type='text'
                    placeholder='search'
                    onChange={e=> onChangeHandler(e)}
                    value={title}
                />
                <button onClick={()=> search(title)}><i class="fa fa-search"></i></button>
            </div>
            
            <div>
                {movies.length>0 && movies.map(movie=>{
                    if(movie.backdrop_path || movie.poster_path){
                        return(<>
                        <Link  to={{
                                pathname : "/search" ,
                                state : {movie},
                                }} 
                                //target="_blank"
                                onContextMenu={() => localStorage.setItem("movie", JSON.stringify(movie))} 
                                
                        >
                            <img 
                                key={movie.id}
                                src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        </>
                        )
                    }
                    
                })}
                
            </div>
            <div className="created">
                <a  href="https://www.facebook.com/profile.php?id=100005962092615"><i style={{paddingRight:'5px'}} class='far fa-copyright'></i>created by aziz</a>
            </div>
        </div>
    )
}

export default Find

