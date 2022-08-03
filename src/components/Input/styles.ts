import styled, { css } from 'styled-components'

export interface InputProps {
  variant?: 'small' | 'medium' | 'large'
}

export const Container = styled.div<InputProps>`
  position: relative;
  display: flex;

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
export const OptionalIndicator = styled.label`
  position: absolute;
  align-self: center;
  right: 0.5rem;

  font-style: italic;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-label']};
`

export const InputBox = styled.input<InputProps>`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  width: 100%;

  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
