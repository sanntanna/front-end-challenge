import * as types from '../../actions/actionTypes';

export const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state, action.payload]
    
    case types.REMOVE_TO_CART:
        const itemIndex = state.findIndex(i => i === action.payload);
        return state.filter((item, index) => index != itemIndex);

    default:
      return state;
  }
}

export default shoppingCartReducer;