import React, { useState } from 'react';
import './ContactUs.css';
import instaImage from './contactImages/instagram.png';
import twitterImage from './contactImages/twitter.png';
import phoneImage from './contactImages/phone-call.png';
import emailImage from './contactImages/gmail.png';

function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Reset all inputs
    setFormData({
      firstName: '',
      lastName: '',
      message: '',
    });
  };

  return (
    <div className="mainContactUs">
      <div className="contactUsForm">
        <div className="title">contact us</div>
        {/* Corrected the form tag */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              placeholder="first name"
              className="input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="last name"
              className="input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <br />
            <textarea
              placeholder="send a message.."
              className="textArea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="send" type="submit">
            send
          </button>
        </form>

        <div className="infoContact">
          <div className="row1">
            <div className="info1">
              <img src={instaImage} className="images" alt="Instagram" />
              <div className="txt1">ahmed.alarab.011</div>
            </div>
            <div className="info2">
              <img src={twitterImage} className="images" alt="Twitter" />
              <div className="txt2">ahmed.alarab</div>
            </div>
          </div>

          <div className="row2">
            <div className="info3">
              <img src={emailImage} className="images" alt="Email" />
              <div className="txt3">ahmadalarab011@gmail.com</div>
            </div>
            <div className="info4">
              <img src={phoneImage} className="images" alt="Phone" />
              <div className="txt4">+961 81 826 492</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
