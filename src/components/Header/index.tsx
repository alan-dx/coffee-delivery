import { Container, InfoBox, LocationBadge } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartItems } = useCart()

  const itemsAmount = cartItems?.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <Container>
      <img src={logo} alt="" />
      <InfoBox>
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          Salvador, BA
        </LocationBadge>
        <CartButton variant="yellow" itemsCounter={itemsAmount} />
      </InfoBox>
    </Container>
  )
}
