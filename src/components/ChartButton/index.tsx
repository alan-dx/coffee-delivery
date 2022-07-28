import React from 'react'
import { ShoppingCart } from 'phosphor-react'

import { Container, ItemsBadge } from './styles'

interface ChartButtonProps {
  variant?: 'purple' | 'yellow'
  itemsCounter?: number
}

export function ChartButton({
  variant = 'purple',
  itemsCounter = 1,
}: ChartButtonProps) {
  return (
    <Container variant={variant}>
      <ShoppingCart size={22} weight="fill" />
      {!!itemsCounter && <ItemsBadge>3</ItemsBadge>}
    </Container>
  )
}
