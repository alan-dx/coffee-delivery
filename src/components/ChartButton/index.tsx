import React from 'react'
import { ShoppingCart } from 'phosphor-react'

import { Container, ItemsBadge } from './styles'

interface ChartButtonProps {
  variant?: 'purple' | 'yellow'
  itemsCounter?: number
}

export function ChartButton({
  variant = 'purple',
  itemsCounter = 0,
}: ChartButtonProps) {
  return (
    <Container variant={variant}>
      <ShoppingCart size={22} weight="fill" />
      {!!itemsCounter && <ItemsBadge>{itemsCounter}</ItemsBadge>}
    </Container>
  )
}
