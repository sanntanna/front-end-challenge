import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShoppingCartStyles from './shoppingCart.styl';
import {FormatMoney}  from './../../helpers/js/formatMoney';
import Img from 'react-image';
import * as shoppingCartActions from './../../actions/shoppingCartActions';
import * as productsActions from './../../actions/productsActions';

class ShoppingCart extends Component {
    constructor (props) {
        super(props);
    }

    purchaseTotal (itemsAddList) {
        let subTotals = [];
        let purchaseTotal = [];

        itemsAddList.map((item) => {
            let formatPrice = item.actualPrice.replace(',' , '.');
            let normalizedPrice = formatPrice.replace('R$' , '');
            subTotals.push(item.quantity * normalizedPrice);
        });

        const total = subTotals.reduce((accumulator, currentValue) => accumulator + currentValue);

        purchaseTotal.push(
            <React.Fragment>
                <span>Total a pagar:</span>
                <span>{`R$ ${FormatMoney.real(total)}`}</span>
            </React.Fragment>
        )

        return purchaseTotal;
    }

    removeFromCart (itemAdded) {
        this.props.actions.removeToCart(itemAdded);
    }

    buildItemAdd (itemsAddList) {
        let itemsAdd = [];

        itemsAddList.map((item) => {
            const {name, quantity, actualPrice, color, size, image} = item;

            itemsAdd.push(
                <li className={ShoppingCartStyles.listItem}>
                    <div className={ShoppingCartStyles.listItemContainer}>
                        <div className={ShoppingCartStyles.listItemImage}>
                            <Img alt={name} src={[image, 'http://via.placeholder.com/200x200?text=Indispon%C3%ADvel']}/>
                        </div>
                        <div className={ShoppingCartStyles.listItemInfo}>
                            <h4 className={ShoppingCartStyles.listItemInfoName}>{name}</h4>
                            <a href="#" className={ShoppingCartStyles.listItemClose} onClick={() => this.removeFromCart(item)}>x</a>
                            <div className={ShoppingCartStyles.listItemInfoDetails}>
                                <span className={ShoppingCartStyles.listItemInfoDetailsSize}>Tam.: {size}</span>
                                <span className={ShoppingCartStyles.listItemInfoDetailsColor}>Cor: {color}</span>
                            </div>
                            <div className={ShoppingCartStyles.listItemInfoOptions}>
                                <div className={ShoppingCartStyles.listItemInfoOptionsPrice}>{actualPrice}</div>
                            </div>
                        </div>
                    </div>
                </li>
            )
        });

        return itemsAdd;
    }

    render () {
        const {shoppingCart, panel} = this.props;
        let classPanel = panel.isOpened === true ? `${ShoppingCartStyles.container} ${ShoppingCartStyles.isVisible}` : ShoppingCartStyles.container;

        return (
            <React.Fragment>
                <aside className={classPanel}>
                    <header className={ShoppingCartStyles.header}>
                        <h4 className={ShoppingCartStyles.title}>Sacola ({shoppingCart.length})</h4>
                        <a className={ShoppingCartStyles.close} onClick={() => this.props.actions.closePanel()}>x</a>
                    </header>

                    {shoppingCart.length !== 0 ? (
                        <React.Fragment>
                            <main className={ShoppingCartStyles.listContainer}>
                                <ul className={ShoppingCartStyles.list}>
                                    {this.buildItemAdd(shoppingCart)}
                                </ul>
                            </main>
                            <footer className={ShoppingCartStyles.footer}>
                                <div className={ShoppingCartStyles.footerTotal}>
                                    {this.purchaseTotal(shoppingCart)}
                                </div>
                            </footer>
                        </React.Fragment>
                    ):
                    (<div className={ShoppingCartStyles.empty}>
                        Sua sacola está vazia :(
                    </div>)
                    }
                </aside>
            </React.Fragment>
    );
  }
}

ShoppingCart.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (store, state) => ({
    shoppingCart: store.shoppingCart,
    panel: store.panel
});


function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, shoppingCartActions, productsActions), dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);