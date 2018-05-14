import * as actionType from './actionTypes';
import ProductsApi from '../api/productsApi';

function fetchProductsSuccess (products) {
    return {type: actionType.FETCH_PRODUCTS_SUCCESS, products};
}
  
function fetchProductsError () {
    return {type: actionType.FETCH_PRODUCTS_FAILURE};
};

export function getProducts () {
    return dispatch => {
		return ProductsApi.getProducts()
			.then(response =>{
				dispatch(fetchProductsSuccess(response.data.products));
			}).catch(() => {
				dispatch(fetchProductsError());
			});
	};
}