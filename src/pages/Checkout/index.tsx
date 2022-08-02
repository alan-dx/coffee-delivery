import { FormInputs } from './components/FormInputs'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <FormInputs />
      <aside>
        <strong>Cafés selecionados</strong>
      </aside>
    </Container>
  )
}
