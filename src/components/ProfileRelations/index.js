import { ProfileRelationsStyled } from "./styles";

export function ProfileRelations({ children, ...props}) {
  return (
    <ProfileRelationsStyled {...props}>
      { children }
    </ProfileRelationsStyled>
  )
}
