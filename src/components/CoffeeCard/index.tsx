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

import { Badge } from '../Badge'
import { ChartButton } from '../ChartButton'
import { ItemCounter } from '../ItemCounter'
import { Coffee } from '../../@types/Coffee'

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
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
        <img src={data['image-url']} />
        <BadgesBox>
          {data.tags.map((tag) => (
            <Badge text={tag} key={tag} />
          ))}
        </BadgesBox>
      </ImageBox>
      <InfoBox>
        <CoffeeTitle>{data.name}</CoffeeTitle>
        <CoffeeDescription>{data.description}</CoffeeDescription>
      </InfoBox>
      <PriceBox>
        <Price>
          <small>R$</small>{' '}
          {data.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            signDisplay: 'never',
          })}
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
