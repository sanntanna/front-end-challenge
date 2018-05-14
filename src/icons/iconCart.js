import React, {Component} from 'react';
import PropTypes from 'prop-types';

const IconCart = ({classname, fillColor, width, height}) => {
    return (
        <React.Fragment>
            <i className={classname}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
                    <path fill={fillColor} d="M6 14.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 6 14.5zM16 14.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 16 14.5zM16 8V2H4a1 1 0 0 0-1-1H0v1h2l.751 6.438A2 2 0 0 0 4 12h12v-1H4a1 1 0 0 1-1-1v-.01L16 8z"/>
                </svg>
            </i>
        </React.Fragment>
    )
}

const defaultProps = {
    classname: 'icon-cart',
    fillColor: '#5a5a5a',
    width: 16,
    height: 16
};

const propTypes = {
    classname: PropTypes.string,
    fillColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

IconCart.propTypes = propTypes;
IconCart.defaultProps = defaultProps;

export default IconCart;