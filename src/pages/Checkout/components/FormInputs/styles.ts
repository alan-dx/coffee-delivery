import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
  }
`
export const FormContentBox = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 2.5rem;
`
export const AddressHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const AddressTextBox = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  small {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }
`

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
export const RadioButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const RadioButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  min-width: 11.25rem;

  padding: 1rem;
  margin-top: 2rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;

  &:checked {
    background-color: ${(props) => props.theme['purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  &:before {
    content: attr(data-label);
    display: inline-block;
    text-align: center;
    width: 100%;
  }
`
