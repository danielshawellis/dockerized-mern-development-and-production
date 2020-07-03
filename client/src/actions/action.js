import axios from 'axios';
import * as actionNames from './ACTIONS';
import config from '../config';

const API_URL = config.apiUrl;

export function handleUpdate() {
    return (dispatch) => {
        axios.get(`${API_URL}/api/items`)
            .then(res => {
                const items = res.data;
                dispatch(handleUpdateSuccess(items));
            }).catch(err => {
                console.log(err);
                dispatch(handleUpdateFailure(err));
            })
    }
}

function handleUpdateSuccess(items) {
    return {
        type: actionNames.UPDATE_ALL_SUCCESS,
        payload: items
    };
}

function handleUpdateFailure(err) {
    return {
        type: actionNames.UPDATE_ALL_FAILURE,
        payload: err
    };
}

export function handleInputChange(inputValue) {
    return {
        type: actionNames.UPDATE_INPUT_CONTENTS,
        payload: inputValue
    };
}

export function handleFormSubmit(inputValue) {
    return (dispatch) => {
        axios.post(`${API_URL}/api/items`, { name: inputValue })
            .then(res => {
                const name = res.data.name
                const id = res.data._id
                dispatch(handleFormSubmitSuccess(name, id))
            }).catch(err => {
                console.log(err);
                dispatch(handleFormSubmitFailure(err))
            })
    }
}

function handleFormSubmitSuccess(name, id) {
    return {
        type: actionNames.SUBMIT_ITEM_SUCCESS,
        payload: {
            name: name,
            id: id
        }
    };
}

function handleFormSubmitFailure(err) {
    return {
        type: actionNames.SUBMIT_ITEM_FAILURE,
        payload: err
    }
}

export function handleDelete(id) {
    return (dispatch) => {
        axios.delete(`${API_URL}/api/items/${id}`)
            .then(res => {
                const _id = res.data._id
                dispatch(handleDeleteSuccess(_id))
            }).catch(err => {
                console.log(err);
                dispatch(handleDeleteFailure(err))
            })
    }
}

function handleDeleteSuccess(id) {
    return {
        type: actionNames.DELETE_ITEM_SUCCESS,
        payload: id
    };
}

function handleDeleteFailure(err) {
    return {
        type: actionNames.DELETE_ITEM_FAILURE,
        payload: err
    }
}