import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <h2>NETFLIX</h2>
            <Link className='film-link' to='/main'>
                Enjoy
            </Link>
        </nav>
    );
}

export default Header;
