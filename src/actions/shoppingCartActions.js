import * as actionType from './actionTypes';

export function addToCart(payload) {
    return {
      type: actionType.ADD_TO_CART,
      payload: payload
    }
}

export function removeToCart(payload) {
  return {
    type: actionType.REMOVE_TO_CART,
    payload: payload
  }
}

export function openPanel () {
  return {
    type: actionType.OPEN_PANEL
  };
}

export function closePanel () {
  return  {
    type: actionType.CLOSE_PANEL
  }
}