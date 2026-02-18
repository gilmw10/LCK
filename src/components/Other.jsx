import "./Other.css"
import leagueImage from "../assets/league.png"

function Other(){
  return(
    <div className="other-container">
      <h2 className="main-title">OTHER LEAGUES</h2>
      <img src={leagueImage} alt="leagues" className="limg"/>
    </div>
  )
}

export default Other