import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  max-width: 16rem;
  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -20%;
  gap: 0.75rem;
`
export const BadgesBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;

  gap: 0.25rem;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  margin-top: 1rem;
`
export const CoffeeTitle = styled.strong`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeeDescription = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-label']};

  text-align: center;
`

export const PriceBox = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Price = styled.strong`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;

  small {
    font-family: 'Roboto', cursive;
    font-size: 0.8rem;
    font-weight: 400;
  }
`
export const ActionsBox = styled.div`
  display: flex;
  gap: 0.5rem;
`
