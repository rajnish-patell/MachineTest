import React from "react";
import rCard1 from "../../assets/images/rCard1.png";
import rCard2 from "../../assets/images/rCard2.png";
import refchar1 from "../../assets/images/refchar1.png";
import refchar2 from "../../assets/images/refchar2.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./ReferYourFriend.css";
import PlayButton from "../ui/Button";

const ReferYourFriend = () => {
  return (
    <section className="referralSection" id="referralSection">
      <Container className="custom-container">
        <Row>
          <Col xxl={6}>
            <div className="refBox rCard1">
              <div className="refBoxContent">
                <Image className="refBg" src={rCard1} alt="refer background" />
                <Image className="refCharacter" src={refchar1} alt="character" fluid />
                <div className="refContent">
                  <div className="position-relative">
                    <h2>Refer Your Friend and Earn Rewards!</h2>
                    <p>
                      Refer your friends and enjoy exclusive bonuses and
                      discounts.
                    </p>
                    <PlayButton label="Play Now" className="refCardBtn" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={6}>
            <div className="refBox rCard2">
              <div className="refBoxContent">
                <Image className="refBg" src={rCard2} alt="refer background" />
                <Image className="refCharacter" src={refchar2} alt="character" fluid />
                <div className="refContent">
                  <div className="position-relative">
                    <h2>Where the excitement knows no bounds</h2>
                    <p>
                      Experience unparalleled joy with our exclusive perks, from
                      high-stakes adventures to unforgettable triumphs!
                    </p>
                    <PlayButton label="Play Now" className="refCardBtn" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="refGradientLeft"></div>
      <div className="refGradientRight"></div>
      <div className="refGradientTop"></div>
      <div className="refGradientBottom"></div>
    </section>
  );
};

export default ReferYourFriend;
