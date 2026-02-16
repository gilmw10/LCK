import { teams } from "../TeamData";
import "./Team.css";

function Team(){
  return(
    <div className="team-container">
      <h2 className="title">LCK TEAMS</h2>
      <div className="team-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-item">
            <img src={team.logo} alt={team.name} className="team-logo"/>
            <div className="overlay">
              <span className="team-name">{team.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team