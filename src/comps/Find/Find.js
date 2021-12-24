import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/movies_and_series_style.css";
import ImageLink from "../Utils/ImageLink";
import CopyRight from "../Utils/CopyRight";
import Header from "../Utils/Header";
const api_key = require("../../keys").API_KEY;

function Find({ list, path }) {
    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);
    //const data = useSelector(state=>state.items)
    useEffect(() => {
        setData(list);
    }, []);

    const search = async (val) => {
        const res = await axios(
            `https://api.themoviedb.org/3/search/${path}?api_key=${api_key}&query=${val}`
        );
        const data_list = await res.data.results;
        setData(data_list);
    };

    const onChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    return (
        <div className='find'>
            <Header />
            <div className='first'>
                <input
                    type='text'
                    placeholder='search'
                    onChange={(e) => onChangeHandler(e)}
                    value={title}
                />
                <button onClick={() => search(title)}>
                    <i class='fa fa-search'></i>
                </button>
            </div>

            <div>
                {data.map((item) => {
                    return <ImageLink pathname={"/details"} movie={item} />;
                })}
            </div>
            <CopyRight />
        </div>
    );
}

export default Find;
