import React from 'react'
import { CartItem } from '../@types/CartItem'
import {
  addItemToCartAction,
  removeItemFromCartAction,
  incrementItemOnCart,
  decrementItemOnCart,
} from '../reducers/actions'
import { cartStateReducer } from '../reducers/reducer'

interface CartContextData {
  cartItems: CartItem[]
  handleAddItemToCart: (item: CartItem) => void
  handleRemoveItemFromCartAction: (id: number) => void
  handleIncrementItemOnCart: (id: number) => void
  handleDecrementItemOnCart: (id: number) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = React.useReducer(
    cartStateReducer,
    [] as CartItem[],
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  React.useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function handleAddItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  const handleRemoveItemFromCartAction = React.useCallback((id: number) => {
    dispatch(removeItemFromCartAction(id))
  }, [])

  function handleIncrementItemOnCart(id: number) {
    dispatch(incrementItemOnCart(id))
  }

  function handleDecrementItemOnCart(id: number) {
    dispatch(decrementItemOnCart(id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState,
        handleAddItemToCart,
        handleRemoveItemFromCartAction,
        handleIncrementItemOnCart,
        handleDecrementItemOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
