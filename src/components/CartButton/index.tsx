import React, { ButtonHTMLAttributes } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { Container, ItemsBadge } from './styles'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'purple' | 'yellow'
  itemsCounter?: number
}

export function CartButton({
  variant = 'purple',
  itemsCounter = 0,
  ...rest
}: CartButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <ShoppingCart size={22} weight="fill" />
      {!!itemsCounter && <ItemsBadge>{itemsCounter}</ItemsBadge>}
    </Container>
  )
}
