import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.25rem 0.5rem;

  border-radius: 10px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.625rem;
`
