import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`
export const InfoBox = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
`
