import { ProfileRelations } from '../ProfileRelations'

export function AsideBanner({ arrayTarget, title }) {
  return (
    <ProfileRelations>
      <h2 className="smallTitle">{title} ({arrayTarget.length})</h2>

      <ul>
        {arrayTarget.map(({key, name, linkTo, capeImgLink }, index) => {
          if(index >= 6) {
            return null
          } else {
            return (
              <li key={key}>
                <a href={linkTo}>
                  <img src={capeImgLink} alt="Cape" />
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
