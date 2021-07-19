import { useState } from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

import { useCommunities } from '../hooks/useCommunities'
import { usePersons } from '../hooks/usePersons'
import { useFollowers } from '../hooks/useFollowers'

import { Grid } from '../components/Grid'
import { Box } from '../components/Box'
import { ProfileSideBar } from '../components/ProfileSideBar'
import { AsideBanner } from '../components/AsideBanner'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'

export default function Home({ datoApiToken, githubUser }) {
  const { communities, createCommunity } = useCommunities(datoApiToken)
  const [newCommunitieName, setNewCommunitieName] = useState('')
  const [newCommunitieUrlImage, setNewCommunitieUrlImage] = useState('')
  const [whatToDo, setWhatToDo] = useState('')
  const { communityPersons, addCommunityPerson } = usePersons(datoApiToken)
  const [newPersonLogin, setNewPersonLogin] = useState('')
  const { followers } = useFollowers(githubUser)

  function handleCreateCommunity(event) {
    event.preventDefault()

    if(newCommunitieName !== '' && newCommunitieUrlImage !== '') {
      const newCommunity = {
        name: newCommunitieName,
        linkTo: '#',
        urlImage: newCommunitieUrlImage,
        creatorSlug: 'pedro',
      }
      createCommunity(newCommunity)
    } else {
      throw new Error('Prencha todos os campos')
    }
  }

  function handleAddPerson(event) {
    event.preventDefault()

    if(newPersonLogin !== '') {
      const login = newPersonLogin.replaceAll(/,|"|'|\//g, '')
      addCommunityPerson(login)
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
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <button
                type="button"
                onClick={() => setWhatToDo('createCommunity')}
                style={{
                  borderRadius: '8px'
                }}
              >Criar comunidade</button>
              <button
                type="button"
                onClick={() => setWhatToDo('addCommunityPerson')}
              >Adicionar pessoa da comunidade</button>
            </div>
            { whatToDo == 'createCommunity' && (
              <form onSubmit={(event) => handleCreateCommunity(event)}>
                <input
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  title="Qual vai ser o nome da sua comunidade?"
                  onChange={({ target }) => setNewCommunitieName(target.value)}
                  value={newCommunitieName}
                />
                <input
                  type="text"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  placeholder="Coloque uma URL para usarmos de capa"
                  title="Coloque uma URL para usarmos de capa"
                  onChange={({ target }) => setNewCommunitieUrlImage(target.value)}
                  value={newCommunitieUrlImage}
                />
                <button type="submit">Criar</button>
              </form>
            )}
            { whatToDo == 'addCommunityPerson' && (
              <form onSubmit={(event) => handleAddPerson(event)}>
                <input
                  type="text"
                  name="link"
                  aria-label="Coloque o nome de login do GitHub da pessoa"
                  placeholder="Coloque o nome de login do GitHub da pessoa. Exemplo: marco-silvz"
                  title="Coloque o nome de login do GitHub da pessoa"
                  onChange={({ target }) => setNewPersonLogin(target.value)}
                  value={newPersonLogin}
                />
                <button type="submit">Adicionar</button>
              </form>
            )}
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{
            gridArea: 'profileRelationsArea',
          }}
        >
            <AsideBanner arrayTarget={communityPersons} title="Pessoas da comunidade" />
            <AsideBanner arrayTarget={communities} title="Comunidades" />
            <AsideBanner arrayTarget={followers} title="Seguidores" />
        </div>
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const Authentication = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  const { isAuthenticated } = await Authentication.json()

  const { githubUser } = jwt.decode(token)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      datoApiToken: process.env.DATO_API_READ_ONLY_TOKEN,
      githubUser,
    },
  }
}
