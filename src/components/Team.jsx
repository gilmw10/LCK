import { useState } from "react";
import { teams } from "../TeamData";
import "./Team.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Team(){
  const [selected, setSelected] = useState(null);

  return(
    <div className="team-container">
      <h2 className="title">LCK TEAMS</h2>
      <div className="team-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-item" onClick={() => setSelected(team)}>
            <img src={team.logo} alt={team.name} className="team-logo"/>
            <div className="overlay">
              <span className="team-name">{team.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="close">×</button>
            <div className="modal-header">
              <div className="logo-wrap">
                <img src={selected.logo} alt={selected.name} className="modal-logo"/>
              </div>

              <div className="team-info">
                <h3 className="modal-title">{selected.name}</h3>
                <div className="team-info-list">
                  <div className="team-info-item"><span className="label">창단 년도</span><span className="value">{selected.founded}</span></div>
                  <div className="team-info-item"><span className="label">모기업</span><span className="value">{selected.sponsor || '-'}</span></div>
                  <div className="team-info-item"><span className="label">우승(LCK/월즈)</span><span className="value">{selected.lckWins}/{selected.worldsWins}</span></div>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <h4>팀 로스터</h4>
              <ul className="roster-list">
                {selected.roster.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-footer">
              {selected.instagram && (
                <a href={selected.instagram} target="_blank" rel="noreferrer" className="social-btn instagram" aria-label="instagram">
                  <FaInstagram size={20} />
                </a>
              )}

              {selected.youtube && (
                <a href={selected.youtube} target="_blank" rel="noreferrer" className="social-btn youtube" aria-label="youtube">
                  <FaYoutube size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Team