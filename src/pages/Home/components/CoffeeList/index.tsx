import { CoffeeCard } from '../../../../components/CoffeeCard'

import { Container, List } from './styles'

export function CoffeeList() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <List>
        <CoffeeCard />
      </List>
    </Container>
  )
}
