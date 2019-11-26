import React, {useState, useEffect} from 'react';
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
        {console.log(player)}
        <p>{player.strPlayer}</p>
        <p>{player.strDescriptionEN}</p>
      </div>
  )
}

export default NFLteamPlayer