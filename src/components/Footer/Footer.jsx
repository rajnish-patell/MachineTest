import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footerLogo.png";
import telegram from "../../assets/images/telegram.svg";
import discord from "../../assets/images/discord.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-branding">
            <Link to="/">
              <img src={footerLogo} alt="logo" />
            </Link>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Casino</Link>
              </li>
              <li>
                <Link to="/">Sportsbook</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>About us</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">How To Play</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links contact-links">
              <li>
                <span>Support :</span>
                <Link to="mailto:someone@example.com">support@bitsky.com</Link>
              </li>
              <li>
                <span>Partners :</span>
                <Link to="mailto:partners@bitsky.com">partners@bitsky.com</Link>
              </li>
              <li>
                <span>Legal :</span>
                <Link to="mailto:legal@bitsky.com">legal@bitsky.com</Link>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link className="social-telegram">
                  <img src={telegram} />
                </Link>
              </li>
              <li>
                <Link className="social-discord">
                  <img src={discord} />
                </Link>
              </li>
              <li>
                <Link className="social-twitter">
                  <img src={twitter} />
                </Link>
              </li>
              <li>
                <Link className="social-instagram">
                  <img src={instagram} />
                </Link>
              </li>
              <li>
                <Link className="social-youtube">
                  <img src={youtube} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-rights">2024 Bitsky.bet, All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
