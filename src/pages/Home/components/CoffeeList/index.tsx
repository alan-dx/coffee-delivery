import { CoffeeCard } from '../../../../components/CoffeeCard'

import { Container, List } from './styles'
import coffeeList from '../../../../coffee-list.json'

export function CoffeeList() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <List>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
        ))}
      </List>
    </Container>
  )
}
