import { CartItem } from '../@types/CartItem'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM_ON_CART = 'INCREMENT_ITEM_ON_CART',
  DECREMENT_ITEM_ON_CART = 'DECREMENT_ITEM_ON_CART',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  }
}

export function removeItemFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  }
}

export function incrementItemOnCart(id: number) {
  return {
    type: ActionTypes.INCREMENT_ITEM_ON_CART,
    payload: {
      id,
    },
  }
}

export function decrementItemOnCart(id: number) {
  return {
    type: ActionTypes.DECREMENT_ITEM_ON_CART,
    payload: {
      id,
    },
  }
}
