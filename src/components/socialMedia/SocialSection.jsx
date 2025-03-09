import React from "react";
import youtubeSocial from "../../assets/images/yotubeSocial.svg";
import instaSocial from "../../assets/images/instaSocial.svg";
import twichSocial from "../../assets/images/twichSocial.svg";
import fbSocial from "../../assets/images/fbSocial.svg";
import whatsappSocial from "../../assets/images/whatsaappSocial.svg";
import tiktokSocial from "../../assets/images/tiktokSocial.svg";
import "./SocialSection.css";
import { Container } from "react-bootstrap";

const SocialSection = () => {
  const socialMediaLinks = [
    { img: youtubeSocial, name: "Youtube" },
    { img: instaSocial, name: "Instagram" },
    { img: twichSocial, name: "Twitch" },
    { img: fbSocial, name: "Facebook" },
    { img: whatsappSocial, name: "Whatsapp" },
    { img: tiktokSocial, name: "TikTok" },
  ];

  return (
    <section className="social-section">
      <Container className="custom-container">
        <div className="social-section__wrapper">
          <div className="social-section__title-container">
            <h2>Social Media</h2>
          </div>
          <div className="social-section__content">
            <h2>Follow Us on</h2>
            <div className="social-section__links">
              {socialMediaLinks.map((social, index) => (
                <div key={index} className="social-section__link-box">
                  <img src={social.img} alt={social.name} />
                  <h4>{social.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialSection;
