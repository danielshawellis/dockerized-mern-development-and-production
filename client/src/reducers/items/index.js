import * as actionNames from '../../actions/ACTIONS';

let initialtState = {
  items: [],
  inputValue: ""
}

const reducer = ( state = initialtState, action ) => {
  switch ( action.type ) {
    case actionNames.ITEMS_UPDATE_ALL_SUCCESS: {        
      const items = action.payload;        
      return { ...state, items };
    };

    case actionNames.ITEMS_UPDATE_ALL_FAILURE: {        
      const err = action.payload;       
      return { ...state };
    };

    case actionNames.ITEMS_UPDATE_INPUT_CONTENTS: {        
      const inputValue = action.payload;        
      return { ...state, inputValue };
    };

    case actionNames.ITEMS_SUBMIT_ITEM_SUCCESS: {                
      const newItem = {
        _id: action.payload.id,
        name: action.payload.name,
      };
      const items = [ ...state.items, newItem ];
      return { ...state, items };
    };

    case actionNames.ITEMS_SUBMIT_ITEM_FAILURE: {
      const err = action.payload;
      return { ...state };
    }

    case actionNames.ITEMS_DELETE_ITEM_SUCCESS: {        
      const items = state.items.filter(item => item._id !== action.payload);       
      return { ...state, items };
    };

    case actionNames.ITEMS_DELETE_ITEM_FAILURE: {      
      const err = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducer;
