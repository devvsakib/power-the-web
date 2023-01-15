import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box display='flex' flexDirection="column" alignItems="center">
      <Typography sx={{fontFamily:"monospace"}} varient="h1">This is a CURD Application</Typography>
      <Typography sx={{fontFamily:"monospace"}}  varient="h3">By MERN Stack</Typography>
        </Box>
    </div>
  )
}

export default About