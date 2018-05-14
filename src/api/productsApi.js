import axios from 'axios';

export default class ProductsApi {
    static getProducts () {
        return axios({
            url: './../mocks/products.json'
        })
    }
}