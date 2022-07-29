import React from 'react'
import { CartItem } from '../@types/CartItem'
import { addItemToCartAction } from '../reducers/actions'
import { cartStateReducer } from '../reducers/reducer'

interface CartContextData {
  cartItems: CartItem[]
  handleAddItemToCart: (item: CartItem) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = React.useReducer(
    cartStateReducer,
    [] as CartItem[],
  )

  function handleAddItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  return (
    <CartContext.Provider value={{ cartItems: cartState, handleAddItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
