import React, { Component } from 'react';
import axios from 'axios';
import config from "../config"

const API_URL = config.apiUrl;

class Items extends Component {
    state = {
        items: [],
        inputValue: ""
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item:
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                <input type="submit" value="Submit" />
                </form>
                <ul>{this.state.items.map( item =>
                    <li key={item._id}>
                        {item.name}
                        <button onClick={() => this.handleDelete(item._id)}>DELETE</button>
                    </li>
                )}</ul>
            </React.Fragment>
        );
    };

    componentDidMount() {
        this.getItems();
    };

    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: this.state.inputValue
        };

        this.postItem(item);
    };

    handleDelete = (id) => {
        this.deleteItem(id);
    };

    getItems = () => {
        axios.get(`${API_URL}/api/items`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            }).catch(err => console.log(err));
    };

    postItem = (item) => {        
        axios.post(`${API_URL}/api/items`, item)
            .then(res => {
                this.getItems();
            }).catch(err => console.log(err));
    };

    deleteItem = (id) => {
        axios.delete(`${API_URL}/api/items/${id}`)
            .then(res => {
                this.getItems();
            }).catch(err => console.log(err));
    };
}

export default Items;