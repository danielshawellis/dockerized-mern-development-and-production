import React, { Component } from 'react';
import axios from 'axios';
import config from "../../config";
import { connect } from 'react-redux';
import * as actionNames from '../../store/actions';
import "./items.scss"

const API_URL = config.apiUrl;

class Items extends Component {
    render() {
        const { items, inputValue } = this.props;

        return (
            <React.Fragment>
                <div className="component-items">
                    <form onSubmit={(event) => this.onFormSubmit(event)}>
                        <label>
                            Item:
                            <input className="item-input" type="text" value={inputValue} onChange={(event) => this.onInputChange(event.target.value)} />
                        </label>
                    <input type="submit" value="Submit" />
                    </form>
                    <ul>{items.map( item =>
                        <li className="item" key={item.id}>
                            {item.name}
                            <button onClick={() => this.onDelete(item.id)}>DELETE</button>
                        </li>
                    )}</ul>
                </div>
            </React.Fragment>
        );
    };

    onInputChange = (value) => {
        this.props.handleInputChange(value);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit();
    };

    onDelete = (id) => {        
        this.props.handleDelete(id);
    }

    // componentDidMount() {
    //     this.getItems();
    // };

    // getItems = () => {
    //     axios.get(`${API_URL}/api/items`)
    //         .then(res => {
    //             const items = res.data;
    //             this.setState({ items });
    //         }).catch(err => console.log(err));
    // };

    // postItem = (item) => {        
    //     axios.post(`${API_URL}/api/items`, item)
    //         .then(res => {
    //             this.getItems();
    //         }).catch(err => console.log(err));
    // };

    // deleteItem = (id) => {
    //     axios.delete(`${API_URL}/api/items/${id}`)
    //         .then(res => {
    //             this.getItems();
    //         }).catch(err => console.log(err));
    // };
}

const mapStateToProps = state => {
    return {
        items: state.items,
        inputValue: state.inputValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (inputValue) => dispatch({ type: actionNames.UPDATE_INPUT_CONTENTS, inputValue: inputValue }),
        handleFormSubmit: () => dispatch({ type: actionNames.SUBMIT_ITEM }),
        handleDelete: (id) => dispatch({ type: actionNames.DELETE_ITEM, id: id })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Items);