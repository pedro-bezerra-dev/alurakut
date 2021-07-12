import { Box } from "../Box"

export function ProfileSideBar({ githubUser, ...props }) {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        alt="Avatar"
        style={{
          borderRadius: '8px'
        }}
        {...props}
      />
    </Box>
  )
}
