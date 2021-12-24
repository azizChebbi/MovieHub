import React, { useEffect } from "react";
import Type from "../Genre/Genre";
import requests from "../Utils/requests";
import Banner from "../Banner/Banner";
import url from "../Utils/axios";
import { useDispatch } from "react-redux";
import { fetchSeries } from "../../redux/reducer";
import CopyRight from "../Utils/CopyRight";

function Main() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("the main page");
        function fetchData() {
            url.get(requests.Pub).then((res) => {
                dispatch(fetchSeries(res.data.results));
            });
        }
        fetchData();
    }, []);
    return (
        <div>
            <Banner />
            <Type title='Trending' url={requests.Trending} />
            <Type title='Drama' url={requests.Drama} />
            <Type title='Action' url={requests.Action} />
            <Type title='Comedy' url={requests.Comedy} />
            <Type title='Animation' url={requests.Anim} />
            <Type title='Horror' url={requests.Horror} />
            <Type title='Romance' url={requests.Romance} />
            <Type title='Mystery' url={requests.Mystery} />
            <CopyRight />
        </div>
    );
}

export default Main;
