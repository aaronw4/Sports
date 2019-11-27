import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const NFLteamPlayers = () => {
    const [players, setPlayers] = useState([]);
    const path = window.location.pathname;
    const id = path.slice(6);

  useEffect(() => {
    function fetchData() {
    axios
    .get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`)
    .then(info => setPlayers(info.data.player))
    .catch(err => console.log(err));
    }
    fetchData();
  }, [id]);
    return(
        <div>
            {players.map(player => (
                <Link to={`/player/${player.idPlayer}`} key={player.idPlayer}>
                    <div key={player.idPlayer} className='players'>
                        <p>{player.strPlayer}: {player.strPosition} {player.idPlayer}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NFLteamPlayers;