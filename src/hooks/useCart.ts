import React from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCart() {
  const context = React.useContext(CartContext)

  return context
}
