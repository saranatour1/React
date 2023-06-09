import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header() {
  const [linkPath, setLinkPath] = useState({ '/new': 'Add a new author' });
  const location = useLocation();

  console.log(location.pathname);

  // Update the linkPath based on the location.pathname
  useState(() => {
    if (location.pathname === '/') {
      setLinkPath({ '/new': 'Add a new author' });
      console.log("am i here");
    } else {
      setLinkPath({ '/': 'Home' });
    }
  }, []);
  const linkKey = Object.keys(linkPath)[0];
  const linkValue = Object.values(linkPath)[0];

  // console.log(linkKey,linkValue,linkPath)
  return (
    <div>
      <h3 className= "mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10">Favorite Authors</h3>
      <Button><Link to={linkKey}>{linkValue}</Link></Button>
      
    </div>
  );
}

export default Header;
