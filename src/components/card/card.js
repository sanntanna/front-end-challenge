import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Selectors from './selectors/selectors';
import Prices from './prices/prices'
import Images from './images/images'
import card from './card.styl';

function buildItems (data) {
    const items = data.products;
    const cards = [];
    
    items.map((obj, i) => {
        const {name} = obj;

        cards.push(
            <div className={card.items}>
                <Images data={obj}/>   
                <h4 className={card.title}>{name}</h4>
                <Prices data={obj}/>
                <Selectors data={obj} />
            </div>
        );
    });

    return cards;
}

const Card = ({data}) => {
    return (
        <React.Fragment>
            {buildItems(data)}
        </React.Fragment>
    )
}

const propTypes = {
	data: PropTypes.array
};

export default Card