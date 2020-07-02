import React from 'react';
import './Item.scss'

export const Item = (props) => {
    return (
        <li className="component-item" key={props.id}>
            {props.name}
            <button onClick={() => props.onDelete(props.id)}>DELETE</button>
        </li>
    );
};