import * as actionNames from './ACTIONS';

export function handleInputChange(inputValue) {
    return {
        type: actionNames.UPDATE_INPUT_CONTENTS,
        inputValue: inputValue
    };
}

export function handleFormSubmit() {
    return {
        type: actionNames.SUBMIT_ITEM
    };
}

export function handleDelete(id) {
    return {
        type: actionNames.DELETE_ITEM,
        id: id
    };
}