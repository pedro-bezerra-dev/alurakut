import { useState, useEffect } from 'react'

export function usePersons(datoApiToken) {
  const [communityPersons, setCommunityPersons] = useState([])

  useEffect(() => {
    fetch(
      'https://graphql.datocms.com/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${datoApiToken}`,
        },
        body: JSON.stringify({
          query: `query {
                      allCommunityPeople {
                        id
                        name
                        urlimage
                        linkTo
                        creatorSlug
                      }
                    }`
        }),
      }
    )
    .then(res => res.json())
    .then((res) => {
      setCommunityPersons(res.data.allCommunityPeople)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  async function addCommunityPerson(login) {
    const creatorSlug = login.toLowerCase().replace( /-/g, '_')

    const newPersonData = {
      name: `${login}`,
      urlImage: `https://github.com/${login}.png`,
      linkTo: `https://github.com/${login}`,
      creatorSlug: `${creatorSlug}`,
    }

    const newPerson = await fetch('/api/addCommunityPerson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPersonData)
    })

    const newPersonConverted = await newPerson.json()
    setCommunityPersons([...communityPersons, newPersonConverted])
  }

  return { communityPersons, addCommunityPerson }
}
