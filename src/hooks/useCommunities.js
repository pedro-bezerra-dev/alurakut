import { useState, useEffect } from 'react'

export function useCommunities(datoApiToken) {
  const [communities, setComunites] = useState([])

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
                      allCommunities {
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
      setComunites(res.data.allCommunities)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  async function createCommunity({
    name,
    linkTo,
    urlImage,
    creatorSlug
  }) {
    const newCommunityData = {
      name: `${name}`,
      urlImage: `${urlImage}`,
      linkTo: `${linkTo}`,
      creatorSlug: `${creatorSlug}`,
    }

    const newCommunity = await fetch('/api/createCommunity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCommunityData)
    })

    const newCommunityConverted = await newCommunity.json()
    setComunites([...communities, newCommunityConverted])
  }

  return { communities, createCommunity }
}
