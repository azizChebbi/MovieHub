import React from "react";

function Buttons({ handleClass, handleClick, movie }) {
    return (
        <>
            <button className='active' onClick={handleClass}>
                overview
            </button>
            <button onClick={handleClass}>detail</button>
            <button
                onClick={(e) => {
                    handleClass(e);
                    handleClick(movie);
                }}
            >
                trailer
            </button>
        </>
    );
}

export default Buttons;
