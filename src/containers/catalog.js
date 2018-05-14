import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from './../actions/productsActions';
import * as shoppingCartActions from './../actions/shoppingCartActions';
import Card from './../components/card/card';
import ShoppingCart from './../components/shoppingCart/shoppingCart';
import Header from './../components/header/header';
import CatalogStyle from './catalog.styl';

class Catalog extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    let {actions} = this.props;
    
    actions.getProducts();
  }

  render() {
    let {products} = this.props;
    return (
      <React.Fragment>
          <Header />
          <ShoppingCart/>
          <main className={CatalogStyle.wrapper}>
            <div className={CatalogStyle.container}>
              <Card data={products}/>
            </div>
          </main>
      </React.Fragment>
    );
  }
}

Catalog.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state
});

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, productsActions, shoppingCartActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
