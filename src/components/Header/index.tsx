import { Container, InfoBox, LocationBadge } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const itemsAmount = cartItems?.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  function handleNavigateToCheckoutPage() {
    navigate('../checkout')
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <InfoBox>
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          Salvador, BA
        </LocationBadge>
        <CartButton
          onClick={handleNavigateToCheckoutPage}
          variant="yellow"
          itemsCounter={itemsAmount}
        />
      </InfoBox>
    </Container>
  )
}
