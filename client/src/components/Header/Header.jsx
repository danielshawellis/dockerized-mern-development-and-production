import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Navbar = (props) => {
    return (
        <header>
            <div className="header-inner">
                <Link to="/">
                    <h1>Dockerized MERN Stack</h1>
                </Link>
                <nav>
                    <ul>
                        <Link to='/items'>
                            <li>Items</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;