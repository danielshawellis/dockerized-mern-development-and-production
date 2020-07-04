import React from 'react';
import { Link } from 'react-router-dom';

// @route: /items
const IndexRoute = (props) => {
    return (
        <React.Fragment>
            <h2>Home Page</h2>
            <Link to="/items">
                <button>Go To Items</button>
            </Link>
        </React.Fragment>
    );
};

export default IndexRoute;