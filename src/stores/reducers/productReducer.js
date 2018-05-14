import * as types from '../../actions/actionTypes';

export const productReducer = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_PRODUCTS_SUCCESS:
			return action.products;

		case types.FETCH_PRODUCTS_FAILURE:
			return [];

		default:
			return state;
	}
};

export default productReducer;