import "./About.css"
import lckbImage from "../assets/LCKb.png"

function About(){
  return(
    <div className="about-container">
      <img src={lckbImage} alt="lckb" className="lckbimg" />

      <div className="sub-title">
        <p>We Make Legends</p>
        <p>우리는 전설을 만들어 갑니다.</p>
      </div>

      <p className="description">League of Legends Champions Korea는 라이엇 게임즈가 주최 및 주관하는<br/>대한민국 지역의 리그 오브 레전드 프로 리그 입니다.</p>
      <p className="description2">세계 최초의 LoL 프로 리그이면서 LoL 프로 리그 중 가장 높은 글로벌 시청자를 보유하고, <br/>수많은 전설을 배출해낸 세계 최고 리그입니다.</p>
      
    </div>
  )
}

export default About