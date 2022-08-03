import { CartItem } from '../@types/CartItem'
import { ActionTypes } from './actions'

export function cartStateReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const currentItem: CartItem = action.payload
      const existingItemIndex = state.findIndex(
        (item) => item.id === currentItem.id,
      )

      let newList = []

      if (existingItemIndex >= 0) {
        newList = state.map((item) => {
          if (item.id === currentItem.id) {
            item.amount = item.amount + currentItem.amount
          }

          return item
        })
      } else {
        newList = [...state, currentItem]
      }

      return newList
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const newList = state.filter((item) => item.id !== action.payload.id)
      return newList
    }

    case ActionTypes.DECREMENT_ITEM_ON_CART: {
      const newList = state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount -= 1
        }

        return item
      })

      return newList
    }

    case ActionTypes.INCREMENT_ITEM_ON_CART: {
      const newList = state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }

        return item
      })

      return newList
    }

    default:
      return state
  }
}
