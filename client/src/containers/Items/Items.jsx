import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpdate, handleInputChange, handleFormSubmit, handleDelete } from '../../actions/items';
import "./Items.scss";

import { Item } from '../../components/Item/Item';

class Items extends Component {
    render() {
        const { items, inputValue } = this.props;

        return (
            <React.Fragment>
                <div className="component-items">
                    <form onSubmit={(event) => this.onFormSubmit(event, inputValue)}>
                        <label>
                            Item:
                            <input className="item-input" type="text" value={inputValue} onChange={(event) => this.onInputChange(event.target.value)} />
                        </label>
                    <input type="submit" value="Submit" />
                    </form>
                    <ul>
                        {items.map( item => <Item key={item._id} name={item.name} onDelete={() => this.onDelete(item._id)} />)}
                    </ul>
                </div>
            </React.Fragment>
        );
    };

    componentDidMount() {        
        this.props.handleUpdate();
    }

    onInputChange = (value) => {
        this.props.handleInputChange(value);
    };

    onFormSubmit = (event, inputValue) => {
        event.preventDefault();
        this.props.handleFormSubmit(inputValue);
    };

    onDelete = (id) => {   
        this.props.handleDelete(id);
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        inputValue: state.items.inputValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUpdate: () => dispatch(handleUpdate()),
        handleInputChange: (inputValue) => dispatch(handleInputChange(inputValue)),
        handleFormSubmit: (inputValue) => dispatch(handleFormSubmit(inputValue)),
        handleDelete: (id) => dispatch(handleDelete(id))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Items);