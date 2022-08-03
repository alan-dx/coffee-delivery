import React, { ForwardRefRenderFunction } from 'react'

import { InputBox, Container, OptionalIndicator } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'medium' | 'large'
  isOptional?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { variant = 'large', isOptional = false, ...rest }: InputProps,
  ref,
) => {
  return (
    <Container variant={variant}>
      <InputBox {...rest} ref={ref} />
      {isOptional && <OptionalIndicator>Opcional</OptionalIndicator>}
    </Container>
  )
}

export const Input = React.forwardRef(InputBase)
