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

export function FormInputs() {
  const theme = useTheme()

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
          <Input placeholder="CEP" variant="medium" />
          <Input placeholder="Rua" />
          <InputBox>
            <Input placeholder="Número" variant="medium" type="number" />
            <Input placeholder="Complemento" />
          </InputBox>
          <InputBox>
            <Input placeholder="Bairro" variant="medium" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" variant="small" />
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
            name="gender"
            value="male"
          />
          <RadioButton
            data-label="CARTÃO DE DÉBITO"
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          <RadioButton
            data-label="DINHEIRO"
            type="radio"
            id="female2"
            name="gender"
            value="female2"
          />
        </RadioButtonsBox>
      </FormContentBox>
    </Container>
  )
}
