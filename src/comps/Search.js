import React , {useEffect , useState} from 'react'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';
import '../css/film.css'
import {Link} from 'react-router-dom'
import StarIcon from '@material-ui/icons/Star';

function Search(props){
    const movie = props.location.state ? props.location.state.movie:JSON.parse(localStorage.getItem('movie')) ;
    let year = movie.first_air_date || movie.release_date
    year = parseInt(year.slice(0 , 5)) ;
    const [trailerUrl , setTrailerUrl] = useState()

    const opts = {
        height : "300" ,
        width : "80%" ,
        
        playerVars :{
            autoplay  : 0 ,
        }
    }

    const hanldeClick = movie =>{ 
            movieTrailer(movie?.title || movie?.name)
            .then(url=>{
                const urlParams =new URLSearchParams(new URL(url).search)  ;
                setTrailerUrl(urlParams.get('v')) ;
            })
            .catch(err=>{
                console.log(err) ;
            })
         
    }

    const handleClass = (e)=>{
        const btn = document.getElementsByTagName('button') ;
        const div = document.querySelectorAll('section div') ;
        let index ; 
        for(let i = 0 ;i<btn.length ; i++){
            if(btn[i] == e.target) index = i ;
            btn[i].className ="" ;
        }
        e.target.className="active" ;
        for(let i = 0 ;i<div.length;i++){
            if(i==index){
                div[i].classList.remove('hidden')
            }
            else {
                div[i].classList.add('hidden');
            }
        }
        if(trailerUrl) setTrailerUrl(null)
        
    }

    

    return (
        <div className="film">
            <nav>
                <h2>NETFLIX</h2>
                <Link className="film-link" to="/show">Enjoy</Link>
            </nav>
            <div className="container">
                <div className="first">
                    <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}/>
                </div>
                <div className="second">
                    <h1 style={{color :'white'}}>{movie.title || movie.name}</h1>
                    <p className="etoile">
                        <span style={{color : 'white'}}>{movie.vote_average}</span>
                        <StarIcon style={{color : 'yellow'}}/>
                    </p>
                    <section>
                        <button className="active" onClick={handleClass}>overview</button>
                        <button onClick={handleClass}>detail</button>
                        <button onClick={(e)=>{handleClass(e) ;hanldeClick(movie)}}>trailer</button>
                        <div className="title">
                            <p>{movie.overview}</p>
                        </div>
                        <div className="hidden detail" >
                            <p><span><pre>title  : </pre></span><span>{` ${movie.title || movie.name}`}</span></p>
                            <p><span><pre>release  : </pre></span><span>{movie.release_date||movie.first_air_date}</span></p>
                            <p><span><pre>vote  : </pre></span><span>{movie.vote_average}</span></p>
                        </div>
                        <div className="hidden trailer" >
                            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
                        </div>
                    </section>

                </div>
            </div>
            
            
        </div>
    )
}

export default Search
