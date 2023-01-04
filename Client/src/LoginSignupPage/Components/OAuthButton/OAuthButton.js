import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { GitHubIcon, GoogleIcon, TwitterIcon } from '../Provider/ProviderIcon'
const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon boxSize="5" />,
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon boxSize="5" />,
  },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      
      <Button  key={name} width="full" onClick={()=>{
        window.open('https://tata-cliq-server-596a.onrender.com/auth/google',"_self")
      }} >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)