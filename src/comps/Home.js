import React from 'react'
import {Link} from 'react-router-dom'
import "../css/home.css"

function Home() {
    return (
        <div className="home">
            <nav>
                <h2>NETFLIX</h2>
                <Link className="home-link" to="/show">Enjoy</Link>
            </nav>
            <div className="home-main">
                <div>
                    <p><span>Unlimited movies, TV</span><br></br><span> shows, and more.</span></p>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home
