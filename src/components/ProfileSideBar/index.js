import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons'

import { Box } from "../Box"

export function ProfileSideBar({ githubUser, ...props }) {
  return (
    <Box
      as="aside"
      style={{
        position: 'fixed',
        maxWidth: '160px',
      }}
    >
      <img
        src={`https://github.com/${githubUser}.png`}
        alt="Avatar"
        style={{
          borderRadius: '8px'
        }}
        {...props}
      />
      <hr />
      <a className="boxLink" href={`https://github.com/${githubUser}`}>@{githubUser}</a>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}
