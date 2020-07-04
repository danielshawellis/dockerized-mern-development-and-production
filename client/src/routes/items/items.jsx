import React from 'react';
import './items.scss';

import Items from '../../containers/Items/Items'

// @route: /items
const ItemsRoute = (props) => {
    return (
        <div className="route-items">
            <Items />
        </div>
    );
};

export default ItemsRoute;