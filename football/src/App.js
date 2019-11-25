import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NFLteams from './components/nflTeams'
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    function fetchData() {
    axios
    .get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL')
    .then(info => setTeams(info.data.teams))
    .catch(err => console.log(err));
    }
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <NFLteams teams={teams}/>
      {console.log(teams)}
    </div>
  );
}

export default App;
