import React, { useEffect, useState } from 'react'
import LinkHeader from '../components/LinkHeader';
import CardComponent from '../components/CardComponent';
import SecondaryHeader from '../components/SecondaryHeader';
import axios from 'axios';
import Display from '../components/Display';
import DisplayStatus from '../components/DisplayStatus';
import GameHeader from '../components/GameHeader';

function StatusPage() {

  const [loaded, setLoaded] = useState(false);
  const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/games");
        setGames(response.data);
        setLoaded(true);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/players");
        setPlayers(response.data);
        setLoaded(true);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  


  return (
    <div>
      <LinkHeader /> 
      <CardComponent>
        <GameHeader games={games}/>
        {loaded && <DisplayStatus items={games} people={players}/>}

      </CardComponent>


    </div>
  )
}

export default StatusPage;