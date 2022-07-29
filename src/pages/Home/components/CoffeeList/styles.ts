import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  margin-bottom: 10rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const List = styled.div`
  display: flex;
  margin-top: 3.4rem;
`
