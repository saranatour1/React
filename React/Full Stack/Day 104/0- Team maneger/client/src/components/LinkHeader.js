import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



function LinkHeader() {
  return (
    
      <Stack direction="row" spacing={5}>
          <Button variant="text"><Link to='/players/list'> Manage Players</Link></Button>
          <Button variant="text"><Link to='/status/game'> Manage Player Status </Link></Button>
      </Stack>

  )
}

export default LinkHeader;