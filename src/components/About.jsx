import React from 'react'
import aboutUsImage from './aboutImages/aboutUs.jpg'
import './About.css'
import meImage from './aboutImages/me.jpg'



function About(){
    return(
        <div className='aboutContainer'>
            <div className='topAbout'>
                <img className='aboutImage' src={aboutUsImage}>
                    
                </img>
                <div className='aboutTitle'>about us</div>
                <div className='aboutSentence'>Beyti is here to connect you with safe and reliable housing, providing a trusted platform to find or offer a home across Lebanon</div>
            </div>
            
            <div className='bodyAbout'>
                <div className='infoAbout'>
                    <div className='infoTitle'>Your trusted connection to homes across Lebanon</div>
                    <div className='infoParagraph'>Beyti is a platform dedicated to helping individuals and families in Lebanon find safe and reliable housing during challenging times. Our mission is to make housing accessible to everyone by connecting renters and property owners through a user-friendly and secure platform. We prioritize safety, quality, and transparency, offering features like tailored search filters and an easy listing process to ensure a seamless experience. More than just a website, Beyti is a community-driven solution aimed at rebuilding hope and stability, making a real difference in people’s lives across the country.</div>
                </div>
                <div className='profile'>
                    <div className='profileName'>ahmed alarab</div>
                    <div className='profileInfo'>student at antonine university</div>
                    <img className='profileImage' src={meImage}></img>
                </div>
            </div>
        </div>
    )
}

export default About;