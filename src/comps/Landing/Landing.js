import React from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";
import Header from "../Utils/Header";

function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='home-main'>
                <div>
                    <p>
                        <span>Unlimited movies, TV</span>
                        <br></br>
                        <span> shows, and more.</span>
                    </p>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
