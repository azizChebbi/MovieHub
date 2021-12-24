import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ImageLink({ pathname, movie }) {
    const [loading, setLoading] = useState(true);
    return (
        <Link
            to={{
                pathname,
                state: {
                    movie,
                },
            }}
            onContextMenu={() => localStorage.setItem("movie", JSON.stringify(movie))}
        >
            <div>
                {loading && (
                    <SkeletonTheme baseColor='rgb(22, 22, 22)' highlightColor='rgb(30, 30, 30)'>
                        <Skeleton width={400} height={300} />
                    </SkeletonTheme>
                )}
                <img
                    key={movie.id}
                    src={`http://Image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    alt={movie.title}
                    onLoad={() => setLoading(false)}
                />
            </div>
        </Link>
    );
}

export default ImageLink;
