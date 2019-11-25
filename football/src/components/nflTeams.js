import React from 'react';
import NFLteamPlayers from './nflTeamPlayers'

const NFLteams = props => {
    return(
        <div>
            {props.teams.map(team => (
                <div key={team.strTeamShort}>
                    <p>{team.strTeam}: {team.idTeam}</p>
                </div>
            ))}
            <NFLteamPlayers/>
        </div>
    )
}

export default NFLteams;