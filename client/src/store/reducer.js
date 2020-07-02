import * as actionNames from './actions';

let initialtState = {
  items: [
    {
      id: '5efc0b9eb1aa25006b3028fa',
      name: 'Item from initial state',
    }
  ],
  inputValue: ""
}

const reducer = ( state = initialtState, action ) => {
  switch ( action.type ) {
    case actionNames.UPDATE_INPUT_CONTENTS: {        
        const inputValue = action.inputValue;        
        return { ...state, inputValue };
    };

    case actionNames.SUBMIT_ITEM: {        
        const newItem = {
            id: '5efc0b9eb1aa25006b3028fb',
            name: state.inputValue,
        }        
        const items = [ ...state.items, newItem ];
        return { ...state, items };
    };

    case actionNames.DELETE_ITEM: {        
        const items = state.items.filter(item => item.id !== action.id);       
        return { ...state, items };
    };

    default:
      return state;
  }
};

export default reducer;
