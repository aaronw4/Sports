import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NFLteamPlayer = props => {
    const [player, setPlayer] = useState([]);

  useEffect(() => {
    function fetchData() {
    axios
    .get('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34164777')
    .then(info => console.log(info.data.players))
    .then(info => setPlayer(info.data.player))
    .catch(err => console.log(err));
    }
    fetchData();
  }, []);

  return(
      <div>

      </div>
  )
}

export default NFLteamPlayer