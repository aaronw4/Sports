import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import NFLteamPlayer from './nflPlayer';
import NFLteam from './nflTeam';

const NFLteams = () => {
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
  

    return(
        <div>
            <Route path='/'>
                <div className='headerCont'>
                    <Link to='/'>
                        <h1 className='header'>NFL</h1>
                    </Link>
                </div>
            </Route>

            <Route exact path='/' >
                <div className='teamsCont'>
                    {teams.map(team => (
                        <Link to={`/team/${team.idTeam}`}  key={team.idTeam}>
                            <div key={team.strTeamShort} className='teamCont'>
                                <img src={team.strTeamBadge} alt={team.strTeamShort} className='teamBadge'/>
                                <p className='teamName'>{team.strTeam}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Route>

            <Route path='/team/:id'>               
                <NFLteam/>                             
            </Route>

            <Route path='/player/:id'>
                <NFLteamPlayer/>
            </Route>
        </div>
    )
}

export default NFLteams;