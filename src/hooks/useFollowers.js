import { useState, useEffect } from 'react'

export function useFollowers(githubUser) {
  const [followers, setFollowers] = useState([])

  useEffect(async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${githubUser}`)
      const { followers_url } = await data.json()

      const followersData = await fetch(followers_url)
      let followers = await followersData.json()

      followers = followers.map((follower) => {
        return {
          id: follower.id,
          name: follower.login,
          linkTo: follower.html_url,
          urlimage: follower.avatar_url,
        }
      })

      setFollowers([...followers])
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { followers }
}
