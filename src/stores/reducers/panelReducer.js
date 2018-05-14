import * as types from '../../actions/actionTypes';

export const panelReducer =  (state = {isOpened: false}, action) => {
    switch (action.type) {
        case types.OPEN_PANEL:
            return Object.assign({}, state, {isOpened: true});
        
        case types.CLOSE_PANEL:
            return Object.assign({}, state, {isOpened: false});

        default:
            return state;
    }
};

export default panelReducer;