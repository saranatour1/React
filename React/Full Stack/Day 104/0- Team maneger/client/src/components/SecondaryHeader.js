import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function SecondaryHeader({games}) {
  const location = useLocation();
  const [links , setLinks] = useState([]);

  useEffect(() => {
    if (location.pathname.includes('/status/game')) {
      const gameLinks = games.map((game) => ({
        [`/status/game/${game._id}`]: game.name,
      }));
      setLinks(gameLinks);
    } else {
      setLinks([
        { '/players/list': 'List' },
        { '/players/addplayer': 'Add a Player' },
      ]);
    }
  }, [games, location.pathname]);

  return (
    <div>
      <Stack direction="row" spacing={5}>
      {links.map((link, index) => (
          <Button variant="text" key={index}>
            <Link to={Object.keys(link)[0]}>{Object.values(link)[0]}</Link>
          </Button>
        ))}
      </Stack>
  
    </div>
  )
}

export default SecondaryHeader;


