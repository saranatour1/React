import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

function GameHeader({ games }) {
  const [value, setValue] = useState(0);
  const [links, setLinks] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    const gameLinks = games.map((game) => ({
      [`/status/game/${game._id}`]: game.name,
    }));
    setLinks(gameLinks);
  }, [games]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {links.map((link, index) => (
          <Tab key={index} label={Object.values(link)[0]}  onClick={()=>navigate(Object.keys(link)[0])}/>
        ))}
      </Tabs>
    </Box>
  );
}

export default GameHeader;
