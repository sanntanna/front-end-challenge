import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import products from './reducers/productReducer';
import shoppingCart from './reducers/shoppingCartReducer';
import panel from './reducers/panelReducer';

const persistConfig = {
    key: 'shoppingCart',
    storage,
    blacklist: ['panel']
}

const rootReducer = combineReducers({
    products, 
    shoppingCart,
    panel
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};