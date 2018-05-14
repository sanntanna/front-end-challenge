import React, {Component} from 'react';
import PropTypes from 'prop-types';

const IconUnavaliable = ({classname, fillColor, width, height}) => {
    return (
        <React.Fragment>
            <i className={classname}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
                    <path fill={fillColor} d="M59.993 8l.007.007v47.986l-.007.007H4.007L4 55.993V8.007L4.007 8h55.986zM60 4H4C1.8 4 0 5.8 0 8v48c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4z"/>
                    <path fill={fillColor} d="M52 18a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM56 52H8v-8l14-24 16 20h4l14-12z"/>
                </svg>
            </i>
        </React.Fragment>
    )
}

const defaultProps = {
    classname: 'icon-unavaliable',
    fillColor: '#5a5a5a',
    width: 64,
    height: 64
};

const propTypes = {
    classname: PropTypes.string,
    fillColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

IconUnavaliable.propTypes = propTypes;
IconUnavaliable.defaultProps = defaultProps;

export default IconUnavaliable;