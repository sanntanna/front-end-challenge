import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Selector from './selector.styl';
import Buttons from './../buttons/buttons';

class Selectors extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            sizeActive: ''
        };
    }

    changeSize (size) {
        this.setState({
            sizeActive: size
        })
    }

    buildSizes (items) {
        const sizes = [];
        let newState = {};
        
        items.map((obj, i) => {
            const {size} = obj;
            let uniqueSize = size === 'U';
            let isActive = this.state.sizeActive === size || uniqueSize;

            if (obj.available) {
                sizes.push(
                    <a 
                        key={i} 
                        onClick={() => this.setState({sizeActive: size})}
                        className={`${isActive ? `${Selector.sizes} ${Selector.isActive}`: `${Selector.sizes}`}`}>{size}</a>
                );
            }
        });
        
        return sizes;
    }

    render () {
        const props = this.props.data
        const {sizes, color} = props;
        const {sizeActive} = this.state;

        return (
            <React.Fragment>
                <div>
                    <h5 className={Selector.types}>Cor:<span className={Selector.typesValue}>{color}</span></h5>
                </div>
                <h5 className={Selector.types}>Tamanho<span className={Selector.typesValue}>{sizeActive}</span></h5>
                <div className={Selector.sizesContainer}>
                    {this.buildSizes(sizes)}
                </div>
                <Buttons hasSelector={sizeActive} data={props}/>
            </React.Fragment>
        )
    }
}

Selectors.propTypes = {
    data: PropTypes.object
};

export default Selectors;