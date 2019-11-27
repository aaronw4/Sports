import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const NFLteamPlayer = () => {
    const [player, setPlayer] = useState([]);
    const path = window.location.pathname;
    const id = path.slice(8);

  useEffect(() => {
    function fetchData() {
    axios
    .get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`)
    .then(info => setPlayer(info.data.players[0]))
    .catch(err => console.log(err));
    }
    fetchData();
  }, [id]);

  return(
      <div>
        <div className='playerPageCont'>
          <div>
            <img src={player.strThumb} alt='' className='playerImg'/>
          </div>
          <div className='playerInfo'>
            <h1>{player.strPlayer}</h1>
            <Link to={`/team/${player.idTeam}`}>
              <h3>{player.strTeam}</h3>
            </Link>
            <p>{player.strPosition}</p>
            <p>{player.strHeight}</p>
            <p>{player.strWeight}</p>
          </div>
        </div>
        <p className='playerDes'>{player.strDescriptionEN}</p>
      </div>
  )
}

export default NFLteamPlayer