import React, { useEffect, useState } from 'react'
import LinkHeader from '../components/LinkHeader';
import { useLocation } from 'react-router-dom';
import CardComponent from '../components/CardComponent';
import SecondaryHeader from '../components/SecondaryHeader';
import Display from '../components/Display';
import axios from 'axios';

function MainPage() {
  const location = useLocation();

  console.log(location.pathname);
  const [loaded, setLoaded] = useState(false);
  const [players, setPlayers] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/players");
        setPlayers(response.data);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id !== playerId));
  };

  return (
    <div>
      <LinkHeader />
      <CardComponent>
        <SecondaryHeader />
        {loaded &&  <Display removeFromDom={removeFromDom}  items={players}/>}
      </CardComponent>
    </div>
  )
}

export default MainPage;
