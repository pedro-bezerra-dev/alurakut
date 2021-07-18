import { ProfileRelations } from '../ProfileRelations'

export function AsideBanner({ arrayTarget, title }) {
  return (
    <ProfileRelations>
      <h2 className="smallTitle">{title} ({arrayTarget.length})</h2>

      <ul>
        {arrayTarget.map(({ id, name, linkTo, urlimage }, index) => {
          if(index >= 6) {
            return null
          } else {
            return (
              <li key={id}>
                <a href={linkTo}>
                  <img src={urlimage} alt="Cape" />
                  <span>{name}</span>
                </a>
              </li>
            )
          }
        })}
      </ul>
    </ProfileRelations>
  )
}
