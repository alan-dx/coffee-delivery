import React from 'react'

import { Container } from './styles'

interface BadgeProps {
  text: string
}

export function Badge({ text }: BadgeProps) {
  return <Container>{text}</Container>
}
