import React, { ForwardRefRenderFunction } from 'react'

import { Container, InputProps } from './styles'

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { variant = 'large', ...rest }: InputProps,
  ref,
) => {
  return <Container variant={variant} {...rest} ref={ref} />
}

export const Input = React.forwardRef(InputBase)
