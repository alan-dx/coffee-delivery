/* eslint-disable array-callback-return */
import React from 'react'
import { useCart } from '../../hooks/useCart'
import { FormInputs } from './components/FormInputs'
import { OrderConfirmation } from './components/OrderConfirmation'
import { Container } from './styles'
import coffeeList from '../../coffee-list.json'
import { Coffee } from '../../@types/Coffee'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe o CEP corretamente'),
  street: zod.string().min(1, 'Informe a Rua corretamente'),
  number: zod.number().min(0, 'Informe um número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro corretamente'),
  city: zod.string().min(1, 'Informe a Cidade corretamente'),
  uf: zod.string().min(1, 'Informe a UF'),
  payment: zod.string(),
})

type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>

export function Checkout() {
  const { cartItems, handleRemoveItemFromCartAction } = useCart()
  const [fullCartItemsData, setFullCartItemsData] = React.useState<Coffee[]>([])

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: undefined,
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: 'card-credit',
    },
  })

  const { handleSubmit } = confirmOrderForm

  React.useEffect(() => {
    function getFullCartItemsData() {
      const newFullCartItemsData = cartItems.map((cartItem) => {
        return coffeeList.find((item: Coffee) => {
          if (item.id === cartItem.id) {
            item.orderAmount = cartItem.amount
            return cartItem
          }
        })!
      })

      setFullCartItemsData(newFullCartItemsData)
    }

    getFullCartItemsData()
  }, [cartItems])

  function onRemoveItem(id: number) {
    handleRemoveItemFromCartAction(id)
  }

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log('teste', data)
  }

  return (
    <Container onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...confirmOrderForm}>
        <FormInputs />
        <OrderConfirmation
          data={fullCartItemsData}
          onRemoveItem={onRemoveItem}
        />
      </FormProvider>
    </Container>
  )
}
