import styled, { css } from 'styled-components'

interface ContainerProps {
  variant: 'purple' | 'yellow'
}

export const Container = styled.button<ContainerProps>`
  padding: 0.5rem;
  border-radius: 6px;

  transition: background-color 0.2s;
  border: 0;

  display: flex;
  align-items: center;
  position: relative;

  ${(props) => {
    if (props.variant === 'purple') {
      return css`
        background-color: ${props.theme['purple-dark']};
        color: ${props.theme['base-card']};

        &:hover {
          background-color: ${props.theme.purple};
        }
      `
    } else {
      return css`
        background-color: ${props.theme['yellow-light']};
        color: ${props.theme['yellow-dark']};
      `
    }
  }}
`
export const ItemsBadge = styled.strong`
  position: absolute;
  top: -0.5rem;
  left: 1.7rem;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  font-size: 0.75rem;
  line-height: 1.25;

  display: flex;
  align-items: center;
  justify-content: center;
`
