/* eslint-disable array-callback-return */
import React from 'react'
import { useCart } from '../../hooks/useCart'
import { FormInputs } from './components/FormInputs'
import { OrderConfirmation } from './components/OrderConfirmation'
import { Container } from './styles'
import coffeeList from '../../coffee-list.json'
import { Coffee } from '../../@types/Coffee'

export function Checkout() {
  const { cartItems } = useCart()
  const [fullCartItemsData, setFullCartItemsData] = React.useState<Coffee[]>([])

  React.useEffect(() => {
    function getFullCartItemsData() {
      const newFullCartItemsData = cartItems.map((cartItem) => {
        return coffeeList.find((item: Coffee) => {
          if (item.id === cartItem.id) {
            item.orderAmount = cartItem.amount
            return cartItem
          }
        })!
      })

      setFullCartItemsData(newFullCartItemsData)
    }

    getFullCartItemsData()
  }, [])

  function onRemoveItem(id: number) {
    const newList = fullCartItemsData.filter((item) => item.id !== id)
    setFullCartItemsData(newList)
  }

  return (
    <Container>
      <FormInputs />
      <OrderConfirmation data={fullCartItemsData} onRemoveItem={onRemoveItem} />
    </Container>
  )
}
