import { Minus, Plus } from 'phosphor-react'

import { Button, Container, Counter } from './styles'

interface ItemCounterProps {
  counter: number
  addItem: () => void
  removeItem: () => void
}

export function ItemCounter({
  counter = 1,
  addItem,
  removeItem,
}: ItemCounterProps) {
  return (
    <Container>
      <Button onClick={removeItem} type="button">
        <Minus />
      </Button>
      <Counter>{counter}</Counter>
      <Button onClick={addItem} type="button">
        <Plus />
      </Button>
    </Container>
  )
}
