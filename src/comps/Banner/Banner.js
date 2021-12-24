import React, { useEffect, useState } from "react";
import url from "../Utils/axios";
import request from "../Utils/requests";
import "../../css/banner.css";
import { Link } from "react-router-dom";

function Banner() {
    const [serie, setSerie] = useState();
    useEffect(() => {
        function fetchData() {
            url.get(request.Pub).then((res) => {
                const series = res.data.results;
                setSerie(series[Math.floor(Math.random() * series.length - 1)]);
            });
        }
        fetchData();
    }, []);
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${
                    serie?.backdrop_path || serie?.poster_path
                }")`,
            }}
        >
            <nav>
                <h2>NETFLIX</h2>
                <div>
                    <Link className='search-link' to='/movies'>
                        movies
                    </Link>
                    <Link className='search-link' to='/series'>
                        series
                    </Link>
                </div>
            </nav>
            <div>
                {serie && (
                    <>
                        <h1>{serie.original_name}</h1>
                    </>
                )}
            </div>
        </header>
    );
}

export default Banner;
//serie-trailer
//react-youtube
