import { Trash } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { Coffee } from '../../@types/Coffee'
import { useCart } from '../../hooks/useCart'
import { ItemCounter } from '../ItemCounter'

import { Container, InfoBox, InfoButtonsBox, RemoveButton } from './styles'

interface CoffeeOrderItemProps {
  onPressRemoveButton: (id: number) => void
  coffee: Coffee
}

export function CoffeeOrderItem({
  onPressRemoveButton,
  coffee,
}: CoffeeOrderItemProps) {
  const { handleDecrementItemOnCart, handleIncrementItemOnCart } = useCart()
  const [counter, setCounter] = React.useState(coffee.orderAmount || 0)

  const theme = useTheme()

  function handleRemoveItem(id: number) {
    setCounter((prevState) => prevState - 1)
    handleDecrementItemOnCart(id)
  }

  function handleAddItem(id: number) {
    setCounter((prevState) => prevState + 1)
    handleIncrementItemOnCart(id)
  }

  return (
    <Container>
      <img src={coffee['image-url']} alt={'Xícara de ' + coffee.name} />
      <InfoBox>
        <span>{coffee.name}</span>
        <InfoButtonsBox>
          <ItemCounter
            counter={counter}
            addItem={() => handleAddItem(coffee.id)}
            removeItem={() => handleRemoveItem(coffee.id)}
          />
          <RemoveButton
            onClick={() => onPressRemoveButton(coffee.id)}
            type="button"
          >
            <Trash size={16} color={theme.purple} />
            <span>REMOVER</span>
          </RemoveButton>
        </InfoButtonsBox>
      </InfoBox>
      <strong>
        {coffee.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        })}
      </strong>
    </Container>
  )
}
