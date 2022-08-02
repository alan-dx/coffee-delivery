import { FormInputs } from './components/FormInputs'
import { OrderConfirmation } from './components/OrderConfirmation'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <FormInputs />
      <OrderConfirmation />
    </Container>
  )
}
