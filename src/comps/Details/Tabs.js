import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import YouTube from "react-youtube";

function Tabs({ movie, trailerUrl }) {
    const opts = {
        height: "250",
        width: "350",

        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <>
            <div className='title'>
                <p>{movie.overview}</p>
            </div>
            <div className='hidden detail'>
                <p>
                    <span>
                        <pre>title : </pre>
                    </span>
                    <span>{` ${movie.title || movie.name}`}</span>
                </p>
                <p>
                    <span>
                        <pre>release : </pre>
                    </span>
                    <span>{movie.release_date || movie.first_air_date}</span>
                </p>
                <p>
                    <span>
                        <pre>vote : </pre>
                    </span>
                    <span>{movie.vote_average}</span>
                </p>
            </div>
            <div className='hidden trailer'>
                {trailerUrl ? (
                    <YouTube videoId={trailerUrl} opts={opts} />
                ) : (
                    <SkeletonTheme baseColor='rgb(22, 22, 22)' highlightColor='rgb(26, 26, 26)'>
                        <Skeleton width={350} height={250} />
                    </SkeletonTheme>
                )}
            </div>
        </>
    );
}

export default Tabs;
