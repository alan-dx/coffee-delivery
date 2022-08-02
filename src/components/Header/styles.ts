import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 9999;

  width: 100%;
  background-color: ${(props) => props.theme.background};

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
