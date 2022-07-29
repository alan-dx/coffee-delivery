import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoItem } from '../../../../components/InfoItem'
import coffeeArt from '../../../../assets/coffee-art.svg'

import { Container, IntroBox, Intro } from './styles'

export function IntroContent() {
  return (
    <Container>
      <IntroBox>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </h2>
        </div>
        <Intro>
          <InfoItem text="Compra simples e segura" variant="yellow-dark">
            <ShoppingCart weight="fill" />
          </InfoItem>
          <InfoItem text="Embalagem mantém o café intacto" variant="base-text">
            <Package weight="fill" />
          </InfoItem>
          <InfoItem text="Entrega rápida e rastreada" variant="yellow">
            <Timer weight="fill" />
          </InfoItem>
          <InfoItem text="O café chega fresquinho até você" variant="purple">
            <Coffee weight="fill" />
          </InfoItem>
        </Intro>
      </IntroBox>
      <img src={coffeeArt} />
    </Container>
  )
}
