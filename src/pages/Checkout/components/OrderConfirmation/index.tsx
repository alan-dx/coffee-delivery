import React from 'react'
import { Coffee } from '../../../../@types/Coffee'
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

interface OrderConfirmationProps {
  data: Coffee[]
  onRemoveItem: (id: number) => void
}

export function OrderConfirmation({
  data,
  onRemoveItem,
}: OrderConfirmationProps) {
  return (
    <Container>
      <strong>Cafés selecionados</strong>
      <OrderInfoBox>
        {data.map((coffee) => (
          <CoffeeOrderItem
            key={coffee.id}
            coffee={coffee}
            onPressRemoveButton={onRemoveItem}
          />
        ))}
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
