import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// @route: /items
const IndexRoute = (props) => {
    return (
        <div className="route-index">
            <h2>Home Page</h2>
            <Link to="/items">
                <button>Go To Items</button>
            </Link>
        </div>
    );
};

export default IndexRoute;