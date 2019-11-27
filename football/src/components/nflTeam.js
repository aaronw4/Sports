import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NFLteamPlayers from './nflTeamPlayers'

const NFLteam = () => {
    const [team, setTeam] = useState([]);
    const path = window.location.pathname;
    const id = path.slice(6);

  useEffect(() => {
    function fetchData() {
    axios
    .get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
    .then(info => setTeam(info.data.teams[0]))
    .catch(err => console.log(err));
    }
    fetchData();
  }, [id]);
    return(
        <div className='teamPageCont'>
            {console.log(team)}
            <img src={team.strTeamBanner} alt={team.strTeam} className='teamBannerImg'/>
            <div className='teamPageInfo'>
                <p>Established in {team.intFormedYear}</p>
                <p>Coach: {team.strManager}</p>
                <p>Stadium: {team.strStadium}</p>
            </div>
            <p className='teamPageDes'>{team.strDescriptionEN}</p>
            <NFLteamPlayers/>
        </div>
    )
}

export default NFLteam;