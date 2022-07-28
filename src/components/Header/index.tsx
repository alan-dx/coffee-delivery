import { Container, InfoBox, LocationBadge } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { ChartButton } from '../ChartButton'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <InfoBox>
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          Salvador, BA
        </LocationBadge>
        <ChartButton variant="yellow" itemsCounter={2} />
      </InfoBox>
    </Container>
  )
}
