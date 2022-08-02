import { Trash } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { ItemCounter } from '../ItemCounter'

import { Container, InfoBox, InfoButtonsBox, RemoveButton } from './styles'

export function CoffeeOrderItem() {
  const [counter, setCounter] = React.useState(2)

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
      <img src="/arabe.svg" />
      <InfoBox>
        <span>Expresso Tradicional</span>
        <InfoButtonsBox>
          <ItemCounter
            counter={counter}
            addItem={handleAddItem}
            removeItem={handleRemoveItem}
          />
          <RemoveButton>
            <Trash size={16} color={theme.purple} />
            <span>REMOVER</span>
          </RemoveButton>
        </InfoButtonsBox>
      </InfoBox>
      <strong>R$ 9,90</strong>
    </Container>
  )
}
