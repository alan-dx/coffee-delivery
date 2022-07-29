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
import { CartButton } from '../CartButton'
import { ItemCounter } from '../ItemCounter'
import { Coffee } from '../../@types/Coffee'
import { useCart } from '../../hooks/useCart'

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const [amountCounter, setAmountCounter] = React.useState(1)
  const { handleAddItemToCart } = useCart()

  function handleIncrementItem() {
    setAmountCounter((prevState) => prevState + 1)
  }

  function handleRemoveItem() {
    setAmountCounter((prevState) => {
      if (prevState === 1) {
        return prevState
      } else {
        return prevState - 1
      }
    })
  }

  function handleSendItemsToCart() {
    handleAddItemToCart({
      id: data.id,
      amount: amountCounter,
    })
    setAmountCounter(1)
  }

  return (
    <Container>
      <ImageBox>
        <img src={data['image-url']} alt={'Xícara de' + data.name} />
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
            addItem={handleIncrementItem}
            removeItem={handleRemoveItem}
            counter={amountCounter}
          />
          <CartButton onClick={handleSendItemsToCart} />
        </ActionsBox>
      </PriceBox>
    </Container>
  )
}
