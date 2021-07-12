import { BoxStyled } from './styles'

export function Box({ children }) {
  return (
    <BoxStyled>
      { children }
    </BoxStyled>
  )
}
