import React from 'react'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import {
  AddressHeader,
  AddressTextBox,
  Container,
  FormContentBox,
  InputBox,
  InputsBox,
  RadioButton,
  RadioButtonsBox,
} from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'

const FormInputsBase = () => {
  const theme = useTheme()

  const { register } = useFormContext()

  return (
    <Container>
      <strong>Complete seu pedido</strong>
      <FormContentBox>
        <AddressHeader>
          <MapPinLine size={22} color={theme['yellow-dark']} />
          <AddressTextBox>
            <span>Endereço de entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </AddressTextBox>
        </AddressHeader>
        <InputsBox>
          <Input placeholder="CEP" variant="medium" {...register('cep')} />
          <Input placeholder="Rua" {...register('street')} />
          <InputBox>
            <Input
              placeholder="Número"
              variant="medium"
              type="number"
              {...register('number', { valueAsNumber: true })}
            />
            <Input placeholder="Complemento" {...register('complement')} />
          </InputBox>
          <InputBox>
            <Input
              placeholder="Bairro"
              variant="medium"
              {...register('district')}
            />
            <Input placeholder="Cidade" {...register('city')} />
            <Input placeholder="UF" variant="small" {...register('uf')} />
          </InputBox>
        </InputsBox>
      </FormContentBox>
      <FormContentBox>
        <AddressHeader>
          <CurrencyDollar size={22} color={theme.purple} />
          <AddressTextBox>
            <span>Pagamento</span>
            <small>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </small>
          </AddressTextBox>
        </AddressHeader>
        <RadioButtonsBox>
          <RadioButton
            data-label="CARTÃO DE CRÉDITO"
            type="radio"
            id="male"
            value="card-credit"
            {...register('payment')}
          />
          <RadioButton
            data-label="CARTÃO DE DÉBITO"
            type="radio"
            id="female"
            value="card-debit"
            {...register('payment')}
          />
          <RadioButton
            data-label="DINHEIRO"
            type="radio"
            id="female2"
            value="card-money"
            {...register('payment')}
          />
        </RadioButtonsBox>
      </FormContentBox>
    </Container>
  )
}

export const FormInputs = React.memo(FormInputsBase)
