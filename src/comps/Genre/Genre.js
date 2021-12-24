import React, { useState, useEffect } from "react";
import url from "../Utils/axios";
import "../../css/genre.css";
import request from "../Utils/requests";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/reducer";
import ImageLink from "../Utils/ImageLink";

function Genre(props) {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        function fetchData() {
            url.get(props.url).then((res) => {
                if (props.url == request.Trending) {
                    dispatch(fetchMovies(res.data.results));
                }
                setMovies(res.data.results);
            });
        }
        fetchData();
    }, []);

    return (
        <div className='type'>
            {movies.length > 0 && <h1>{props.title}</h1>}
            <div>
                {movies.map((movie) => (
                    <ImageLink movie={movie} pathname={"/details"} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Genre;
