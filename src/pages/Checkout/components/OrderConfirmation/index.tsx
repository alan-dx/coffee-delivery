import { Coffee } from '../../../../@types/Coffee'
import { CoffeeOrderItem } from '../../../../components/CoffeeOrderItem'
import { useCart } from '../../../../hooks/useCart'

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
  const { cartItems } = useCart()

  const totalItemsPrice = data.reduce((acc, item) => {
    return acc + item.price * item.orderAmount!
  }, 0)

  const deliveryPrice = 3.5

  const sumTotalItemsDelivery = totalItemsPrice + deliveryPrice

  const isSubmitButtonDisabled = cartItems.length === 0

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
              <span>
                {totalItemsPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </OrderFinishItem>
            <OrderFinishItem>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </OrderFinishItem>
            <OrderFinishTotal>
              <span>Total</span>
              <span>
                {sumTotalItemsDelivery.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </OrderFinishTotal>
          </OrderFinishItemsBox>
          <ConfirmOrderButton type="submit" disabled={isSubmitButtonDisabled}>
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </OrderFinishBox>
      </OrderInfoBox>
    </Container>
  )
}
