import "./about.css"
import award from "../../image/award.png"
import coding from "../../image/photo.png"


const About = ()=> {
    return (

        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src={coding} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Namaste. 
        </p>
        <p className="a-desc">
        My name is Shishir Bishwokarma . I am graduating senior pursuing  a undergraduate degree in computer science at Univerity of Texas at Arlington.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;