import { BoxStyled } from './styles'

export function Box({ children, ...props }) {
  return (
    <BoxStyled {...props}>
      { children }
    </BoxStyled>
  )
}
