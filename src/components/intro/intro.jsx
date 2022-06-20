import "./intro.css"
import photo from "../../image/coding.png"
import cursor from "../../image/cursor.svg"
import resume from "../../resume/sample_resume.pdf"
 const Intro = () => {
    return (
        
        <div className ="i">

            <div className="i-left">
                
            <div className="i-left-wrapper">
                <h2 className="i-intro"> नमस्ते,  my name is</h2>
                <h1 className="i-name">Shishir Bishwokarma </h1>
                
                
                
                <div className="i-title">
                <div className="i-Iam">I'm</div>
                    <div className = "i-title-wrapper">
                        <div className="i-title-item" >Software Developer</div> 
                        <div className="i-title-item" >Programmer</div> 
                        <div className="i-title-item" >Android Developer</div> 
                        <div className="i-title-item" >Robotics Enthusiast</div> 
                        <div className="i-title-item" >Photographer</div> 
                    </div>
                </div>
                <p className="i-desc">
                
                    Download my resume <a href={resume} > here</a>. 
                </p>
                <div className="i-b"></div>
            </div>
            
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src = {photo} alt=""className="i-img"/>
                <img src = {cursor} alt=""className="i-cursor"/>
            </div>
            
        </div>
    )

 }

 export default Intro ; 