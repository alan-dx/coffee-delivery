import React from 'react'

import {
  ActionsBox,
  BadgesBox,
  CoffeeDescription,
  CoffeeTitle,
  Container,
  ImageBox,
  InfoBox,
  Price,
  PriceBox,
} from './styles'

import coffeeImg from '../../assets/expresso.svg'
import { Badge } from '../Badge'
import { ChartButton } from '../ChartButton'
import { ItemCounter } from '../ItemCounter'

export function CoffeeCard() {
  const [chartCounter, setChartCounter] = React.useState(1)

  function handleAddItemOnChart() {
    setChartCounter((prevState) => prevState + 1)
  }

  function handleRemoveItemOnChart() {
    setChartCounter((prevState) => {
      if (prevState === 1) {
        return prevState
      } else {
        return prevState - 1
      }
    })
  }

  return (
    <Container>
      <ImageBox>
        <img src={coffeeImg} />
        <BadgesBox>
          <Badge text="TRADICIONAL" />
        </BadgesBox>
      </ImageBox>
      <InfoBox>
        <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
        <CoffeeDescription>
          Meio a meio de expresso tradicional com leite vaporizado
        </CoffeeDescription>
      </InfoBox>
      <PriceBox>
        <Price>
          <small>R$</small> 9,90
        </Price>
        <ActionsBox>
          <ItemCounter
            addItem={handleAddItemOnChart}
            removeItem={handleRemoveItemOnChart}
            counter={chartCounter}
          />
          <ChartButton />
        </ActionsBox>
      </PriceBox>
    </Container>
  )
}
