import { Trash } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { Coffee } from '../../@types/Coffee'
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
  const [counter, setCounter] = React.useState(coffee.orderAmount || 0)

  const theme = useTheme()

  function handleRemoveItem() {
    setCounter((prevState) => {
      if (prevState === 1) {
        return prevState
      } else {
        return prevState - 1
      }
    })
  }

  function handleAddItem() {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <Container>
      <img src={coffee['image-url']} alt={'Xícara de ' + coffee.name} />
      <InfoBox>
        <span>{coffee.name}</span>
        <InfoButtonsBox>
          <ItemCounter
            counter={counter}
            addItem={handleAddItem}
            removeItem={handleRemoveItem}
          />
          <RemoveButton onClick={() => onPressRemoveButton(coffee.id)}>
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
