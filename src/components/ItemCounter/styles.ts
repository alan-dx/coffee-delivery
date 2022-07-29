import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;

  padding: 0.5rem;
`
export const Button = styled.button`
  border: 0;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const Counter = styled.span`
  color: ${(props) => props.theme['base-title']};
`
