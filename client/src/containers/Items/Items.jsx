import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInputChange, handleFormSubmit, handleDelete } from '../../actions/action';
import "./Items.scss";

import { Item } from '../../components/Item/Item';

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
                    <ul>
                        {items.map( item => <Item name={item.name} id={item.id} onDelete={this.onDelete} />)}
                    </ul>
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
}

const mapStateToProps = state => {
    return {
        items: state.items,
        inputValue: state.inputValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (inputValue) => dispatch(handleInputChange(inputValue)),
        handleFormSubmit: () => dispatch(handleFormSubmit()),
        handleDelete: (id) => dispatch(handleDelete(id))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Items);