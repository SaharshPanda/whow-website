import { Stack } from '@mui/material'
import React from 'react'
import logo from '../assets/Whow.gif'
const Header = () => {
  return (
    <Stack sx={{width:"100%", backgroundColor:"red", height:"30rem"}}>Header
    <img src = {logo} width={"200rem"} height={"200rem"}/>
    </Stack>
  )
}

export default Header