import "./Sponsor.css";
import sponsorImage from "../assets/sponsor.png";

function Sponsor(){
  return(
    <div className="sponsor-container">
      <h2 className="sponsor-title">Sponsors</h2>
      <p className="sponsor-description">LCK와 함께한 스폰서를 소개합니다.</p>

      <img src={sponsorImage} alt="스폰서" className="sponsor-image"/>
    </div>
  )
}

export default Sponsor