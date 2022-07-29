import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding: 5.75rem 0;
`
export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
    text-align: left;

    margin-top: 1rem;
  }
`
export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`
