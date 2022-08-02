import styled from 'styled-components'

export const Container = styled.li`
  display: flex;

  padding-bottom: 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  img {
    max-width: 4rem;
    height: auto;
  }
`
export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  margin-left: 1.25rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const InfoButtonsBox = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;

  span {
    font-size: 0.75rem;
  }

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
