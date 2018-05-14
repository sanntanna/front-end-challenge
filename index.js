import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/stores/stores';
import Catalog from './src/containers/catalog';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Catalog />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);