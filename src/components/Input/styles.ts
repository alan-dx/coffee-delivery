import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'medium' | 'large'
}

export const Container = styled.input<InputProps>`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  ${(props) => {
    if (props.variant === 'small') {
      return css`
        max-width: 3.75rem;
      `
    } else if (props.variant === 'medium') {
      return css`
        max-width: 12.5rem;
      `
    } else {
      return css`
        width: 100%;
      `
    }
  }}
`
