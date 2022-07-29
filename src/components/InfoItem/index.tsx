import React from 'react'

import { Container, IconBox } from './styles'

interface IntroItemProps {
  children: React.ReactNode
  text: string
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export function InfoItem({
  children,
  text,
  variant = 'yellow-dark',
}: IntroItemProps) {
  return (
    <Container>
      <IconBox variant={variant}>{children}</IconBox>
      <span>{text}</span>
    </Container>
  )
}
