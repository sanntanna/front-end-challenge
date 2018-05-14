import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import Image from './images.styl';

const Images = ({data}) => {
    const {
        image: src, 
        name, 
        on_sale: onSale, 
        discount_percentage: discountPercentage} = data;

    return (
        <React.Fragment>
            <div className={Image.container}>
                <Img alt={name} src={[src, 'http://via.placeholder.com/200x200?text=Indispon%C3%ADvel']}/>
                {onSale &&
                    <div className={Image.discount}>{discountPercentage} off</div>
                }
            </div>

        </React.Fragment>
    )
}

const propTypes = {
    data: PropTypes.array
};

export default Images;