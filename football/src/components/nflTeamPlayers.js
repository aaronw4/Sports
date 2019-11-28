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
        <div className='playersCont teamPageDes'>
            <h2>Players</h2>
            <h5>(Click on Player for Player Information)</h5>
            <div className='playerCont'>
                {players.map(player => (
                    <Link to={`/player/${player.idPlayer}`} key={player.idPlayer}>
                        <div key={player.idPlayer} className='players'>
                            <p className='player'>{player.strPlayer}: {player.strPosition}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NFLteamPlayers;