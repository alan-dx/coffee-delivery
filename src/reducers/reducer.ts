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
    case ActionTypes.REMOVE_ITEM: {
      const newList = state.filter((item) => item.id !== action.payload.id)
      return newList
    }
    default:
      return state
  }
}
