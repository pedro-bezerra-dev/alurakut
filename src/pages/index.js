import { Grid } from '../components/Grid'
import { Box } from '../components/Box'
import { ProfileSideBar } from '../components/ProfileSideBar'
import { ProfileRelations } from '../components/ProfileRelations'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'

export default function Home() {
  const githubUser = 'pedro-henrique-sb'
  const favoritePersons = [
    'omariosouto',
    'diego3g',
    'maykbrito',
    'filipedeschamps'
  ]

  return (
    <>
      <AlurakutMenu />
      <Grid>
        <div
          className="profileArea"
          style={{
            gridArea: 'profileArea',
          }}
        >
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div
          className="welcomeArea"
          style={{
            gridArea: 'welcomeArea',
          }}
        >
          <Box className="title">
            <h1>Bem-vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{
            gridArea: 'profileRelationsArea',
          }}
        >
          <ProfileRelations>
            <h2 className="smallTitle">Pessoas da comunidade ({favoritePersons.length})</h2>

            <ul>
              {favoritePersons.map((person) => {
                return (
                  <li key={person}>
                    <a href={`/users/${person}`}>
                      <img src={`https://github.com/${person}.png`} alt="Avatar" />
                      <span>{person}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelations>
          <Box></Box>
        </div>
      </Grid>
    </>
  )
}
