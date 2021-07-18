import { useState } from 'react'

import { useCommunities } from '../hooks/useCommunities'
import { usePersons } from '../hooks/usePersons'
import { useFollowers } from '../hooks/useFollowers'

import { Grid } from '../components/Grid'
import { Box } from '../components/Box'
import { ProfileSideBar } from '../components/ProfileSideBar'
import { AsideBanner } from '../components/AsideBanner'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'

export default function Home({ datoApiToken }) {
  const { communities, createCommunity } = useCommunities(datoApiToken)
  const [newCommunitieName, setNewCommunitieName] = useState('')
  const [newCommunitieUrlImage, setNewCommunitieUrlImage] = useState('')
  const githubUser = 'pedro-henrique-sb'
  const [whatToDo, setWhatToDo] = useState('')
  const { communityPersons, addCommunityPerson } = usePersons(datoApiToken)
  const [newPersonLogin, setNewPersonLogin] = useState('')
  const { followers } = useFollowers(githubUser)

  function handlePreventDefault(event) {
    event.preventDefault()

    if(newCommunitieName !== '' && newCommunitieURL !== '') {
      setComunites([...communities, {
        key: new Date().toISOString(),
        name: newCommunitieName,
        linkTo: '#',
        capeImgLink: newCommunitieURL,
      }])
    } else {
      throw new Error('Prencha todos os campos')
    }
  }

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
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
          <Box>
            <h2
              style={{
                marginBottom: '20px'
              }}
            >O que você deseja fazer?</h2>
            <form onSubmit={(event) => handlePreventDefault(event)}>
              <input
                type="text"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                placeholder="Qual vai ser o nome da sua comunidade?"
                onChange={({ target }) => setNewCommunitieName(target.value)}
                value={newCommunitieName}
              />
              <input
                type="text"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
                placeholder="Coloque uma URL para usarmos de capa"
                onChange={({ target }) => setNewCommunitieURL(target.value)}
                value={newCommunitieURL}
              />
              <button type="submit">Submit</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{
            gridArea: 'profileRelationsArea',
          }}
        >
            <AsideBanner arrayTarget={favoritePersons} title="Pessoas da comunidade" />
            <AsideBanner arrayTarget={communities} title="Comunidades" />
        </div>
      </Grid>
    </>
  )
}
