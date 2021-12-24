import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";

function Header() {
    return (
        <header className='header'>
            <h2>NETFLIX</h2>
            <Link className='link' to='/main'>
                Enjoy
            </Link>
        </header>
    );
}

export default Header;
