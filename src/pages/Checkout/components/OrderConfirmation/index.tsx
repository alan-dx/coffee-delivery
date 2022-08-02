import React from 'react'
import { CoffeeOrderItem } from '../../../../components/CoffeeOrderItem'

import {
  ConfirmOrderButton,
  Container,
  OrderFinishBox,
  OrderFinishItem,
  OrderFinishItemsBox,
  OrderFinishTotal,
  OrderInfoBox,
} from './styles'

export function OrderConfirmation() {
  return (
    <Container>
      <strong>Cafés selecionados</strong>
      <OrderInfoBox>
        <CoffeeOrderItem />
        <CoffeeOrderItem />
        <OrderFinishBox>
          <OrderFinishItemsBox>
            <OrderFinishItem>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </OrderFinishItem>
            <OrderFinishItem>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </OrderFinishItem>
            <OrderFinishTotal>
              <span>Total</span>
              <span>R$ 3,50</span>
            </OrderFinishTotal>
          </OrderFinishItemsBox>
          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderFinishBox>
      </OrderInfoBox>
    </Container>
  )
}
