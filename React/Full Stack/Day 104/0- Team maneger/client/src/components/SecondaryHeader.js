import { Button, Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function SecondaryHeader() {
  return (
    <div>
      <Stack direction="row" spacing={5}>
          <Button variant="text"><Link to='/players/list'>List</Link></Button>
          <Button variant="text"><Link to='/players/addplayer'> Add a Player </Link></Button>
      </Stack>
    </div>
  )
}

export default SecondaryHeader;