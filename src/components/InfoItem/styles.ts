import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_BOX_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface IconBoxProps {
  variant: keyof typeof ICON_BOX_COLORS
}

export const IconBox = styled.div<IconBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme[props.variant]};

  svg {
    color: ${(props) => props.theme.background};
    width: 1rem;
    height: 1rem;
  }
`
