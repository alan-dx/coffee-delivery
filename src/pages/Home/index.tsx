import React from 'react'

import { Container } from './styles'

import { IntroContent } from './components/IntroContent'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <Container>
      <IntroContent />
      <CoffeeList />
    </Container>
  )
}
