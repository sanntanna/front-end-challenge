import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from './../../../actions/shoppingCartActions';
import * as productsActions from './../../../actions/productsActions';
import ButtonStyles from './buttons.styl';
import SelectorStyles from './../selectors/selector.styl';

class Buttons extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            warning: false
        };
    }

    addToCart (hasSelector, data, quantity) {
        if (hasSelector !== '') {
            const {name, actual_price: actualPrice, color, image} = data;
            const {actions} = this.props;

            const itemAdded = {
                image: image,
                name: name,
                quantity: quantity,
                actualPrice: actualPrice,
                color: color,
                size: hasSelector
            }

            this.setState({
                quantity: 1
            })

            actions.openPanel();
            actions.addToCart(itemAdded);

        } else {
            this.setState({warning: true});
        }
    };

    render () {
        let {hasSelector, data} = this.props;

        return (
            <React.Fragment>
                {this.state.warning && hasSelector === '' &&
                    <div className={SelectorStyles.warning}>Por favor selecione um tamanho</div>
                }
                <div className={ButtonStyles.action}>
                    <button className={ButtonStyles.checkout} onClick={() => this.addToCart(hasSelector, data, 1)}>Comprar</button>
                </div>
            </React.Fragment>
        )
    }
}

Buttons.propTypes = {
    hasSelector: PropTypes.bool,
    data: PropTypes.array,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
    actions: store
});

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, shoppingCartActions, productsActions), dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);