import React from 'react';
import NFLteamPlayers from './nflTeamPlayers';
import {Route, Link} from 'react-router-dom';
import NFLteamPlayer from './nflPlayer'

const NFLteams = props => {
    return(
        <div>
            <Route path='/'>
                <Link to='/'>
                    <h1 className='header'>NFL</h1>
                </Link>
            </Route>

            <Route exact path='/'>
            {props.teams.map(team => (
                <Link to={`/team/${team.idTeam}`}  key={team.idTeam}>
                    <div key={team.strTeamShort}>
                        <p>{team.strTeam}: {team.idTeam}</p>
                    </div>
                </Link>
            ))}
            </Route>

            <Route path='/team/:id'>               
                <NFLteamPlayers/>                             
            </Route>

            <Route path='/player/:id'>
                <NFLteamPlayer/>
            </Route>
        </div>
    )
}

export default NFLteams;