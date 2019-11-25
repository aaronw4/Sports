import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NFLteamPlayer from './nflPlayer'

const NFLteamPlayers = props => {
    const [players, setPlayers] = useState([]);

  useEffect(() => {
    function fetchData() {
    axios
    .get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=134946')
    .then(info => setPlayers(info.data.player))
    .catch(err => console.log(err));
    }
    fetchData();
  }, []);
    return(
        <div>
            {console.log(players)}
            {players.map(player => (
                <div key={player.idPlayer}>
                    <p>{player.strPlayer}: {player.strPosition} {player.idPlayer}</p>
                </div>
            ))}
            <NFLteamPlayer/>
        </div>
    )
}

export default NFLteamPlayers;