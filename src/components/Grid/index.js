import { GridStyled } from './styles'

export function Grid({ children, ...props }) {
  return (
    <GridStyled {...props}>
      { children }
    </GridStyled>
  )
}
