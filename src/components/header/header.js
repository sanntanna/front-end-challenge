import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from './../../actions/shoppingCartActions';
import headerStyle from './header.styl';
import IconCart from './../../icons/iconCart';
import IconLogo from './../../icons/iconLogo';

class Header extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let {shoppingCart, actions} = this.props;

        return (
            <React.Fragment>
                <header className={headerStyle.header}>
                    <div className={headerStyle.inner}>
                        <div className={headerStyle.headerLogo}>
                            <IconLogo/>
                        </div>
                        <div className={headerStyle.shopping}>
                            <a onClick={() => actions.openPanel()} className={headerStyle.shoppingIcon}>
                                <IconCart />
                            </a>
                            {shoppingCart.length > 0 &&
                                <span className={headerStyle.shoppingTotalItemsAdded}>{shoppingCart.length}</span>
                            }
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (store, state) => ({
    shoppingCart: store.shoppingCart,
    panel: store.panel
});


function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, shoppingCartActions), dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);