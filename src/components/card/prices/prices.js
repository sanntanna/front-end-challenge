import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Price from './prices.styl';

const Prices = ({data}) => {
    const {
        actual_price: actualPrice, 
        regular_price: regularPrice,
        installments,
        on_sale: onSale, 
        discount_percentage: discountPercentage} = data;

    return (
        <React.Fragment>
            <div className={Price.inner}>
                <span className={Price.actualPrice}>{actualPrice}</span>
                <span className={Price.installments}>{installments}</span>
            </div>

            {onSale &&
                <div className={`${Price.inner} ${Price.innerDiscount}`}>
                    <span className={Price.regularPrice}>{regularPrice}</span>
                    <span className={Price.discountPercentage}>({discountPercentage} off)</span>
                </div>
            }
        </React.Fragment>
    )
}

const propTypes = {
    data: PropTypes.array,
};

export default Prices;