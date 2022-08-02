import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
  }
`

export const OrderInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;

  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const OrderFinishBox = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OrderFinishItemsBox = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderFinishItem = styled.div`
  display: flex;
  flex-direction: row;

  & span:first-child {
    display: block;
    flex: 1;
  }
`
export const OrderFinishTotal = styled(OrderFinishItem)`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
`
export const ConfirmOrderButton = styled.button`
  padding: 0.75rem;

  border: 0;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
