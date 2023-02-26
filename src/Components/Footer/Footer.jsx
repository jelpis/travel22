import React from 'react';
import './footer.css'
import video from '../Assets/video2.mp4'


const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
          </div>
          
        </div>
      </div>
  
    </section>
  )
};

export default Footer;