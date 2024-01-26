import React from "react";
import './AboutPage.css'
import pic from '../../assets/Images/pic.jpg'
import logo from '../../assets/Images/github logo.png'
function AboutPage(){
    return (
        <div className="about-page">
        <h1>About project</h1>
        <p className="firstParagraph">Welcome to my React first React Project!</p>

<h2> Project Description</h2>
<p className="thirdParagraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et mollitia placeat soluta cupiditate omnis voluptatum quidem natus adipisci, id odio ex, atque explicabo beatae ipsa velit accusantium culpa. Libero.</p>

        <h2> Creator</h2>

        <div className="member-container">
           <a href="https://github.com/Zevinos">
           <img src={pic} alt="" className="profileImg"/>
           </a>
           <h3>Evan COINDREAU</h3>

        </div>

        </div>
    )
}




export default AboutPage;