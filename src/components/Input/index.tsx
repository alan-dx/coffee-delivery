import React from 'react'

import { Container, InputProps } from './styles'

export function Input({ variant = 'large', ...rest }: InputProps) {
  return <Container variant={variant} {...rest} />
}
