import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import "../../css/details.css";
import StarIcon from "@material-ui/icons/Star";
import Header from "../Utils/Header";
import Tabs from "./Tabs";
import Buttons from "./Buttons";

function Search(props) {
    const movie = props.location.state
        ? props.location.state.movie
        : JSON.parse(localStorage.getItem("movie"));
    let year = movie.first_air_date || movie.release_date;
    year = parseInt(year.slice(0, 5));
    const [trailerUrl, setTrailerUrl] = useState();

    const handleClick = (movie) => {
        movieTrailer(movie?.title || movie?.name)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleClass = (e) => {
        const btn = document.getElementsByTagName("button");
        const div = document.querySelectorAll("section div");
        let index;
        for (let i = 0; i < btn.length; i++) {
            if (btn[i] == e.target) index = i;
            btn[i].className = "";
        }
        e.target.className = "active";
        for (let i = 0; i < div.length; i++) {
            if (i == index) {
                div[i].classList.remove("hidden");
            } else {
                div[i].classList.add("hidden");
            }
        }
        if (trailerUrl) setTrailerUrl(null);
    };

    return (
        <div className='film'>
            <Header />
            <div className='container'>
                <div className='first'>
                    <img
                        src={`http://image.tmdb.org/t/p/original/${
                            movie.backdrop_path || movie.poster_path
                        }`}
                    />
                </div>
                <div className='second'>
                    <h1 style={{ color: "white" }}>{movie.title || movie.name}</h1>
                    <p className='etoile'>
                        <span style={{ color: "white" }}>{movie.vote_average}</span>
                        <StarIcon style={{ color: "yellow" }} />
                    </p>
                    <section>
                        <Buttons
                            handleClass={handleClass}
                            handleClick={handleClick}
                            movie={movie}
                        />
                        <Tabs movie={movie} trailerUrl={trailerUrl} />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Search;
