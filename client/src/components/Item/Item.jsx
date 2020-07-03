import React from 'react';
import './Item.scss'

export const Item = (props) => {
    return (
        <li className="component-item">
            {props.name}
            <button onClick={() => props.onDelete()}>DELETE</button>
        </li>
    );
};