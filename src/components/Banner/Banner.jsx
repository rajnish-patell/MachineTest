import React from "react";
import "./Banner.css";
import vendingMachImg from "../../assets/images/vendingMachine.png";
import vendingEffect from "../../assets/images/vectorEffect.png";
import winBig from "../../assets/images/winBigTxt.png";
import InBitsky from "../../assets/images/InBitsky.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import ScrollingText from "./ScrollingText";
import cryptoCoin1 from "../../assets/images/cryptoCoin1.png";
import cryptoCoin2 from "../../assets/images/cryptoCoin2.png";
import cryptoCoin3 from "../../assets/images/cryptoCoin3.png";
import cryptoCoin4 from "../../assets/images/cryptoCoin4.png";
import cryptoCoin5 from "../../assets/images/cryptoCoin5.png";
import PlayButton from "../ui/Button";

const Banner = () => {
  return (
    <>
      <div className="bannerSec">
        <Container fluid>
          <Row>
            <Col xl={6}>
              <div className="bannerLeft">
                <div className="winBigTxt text-center">
                  <div className="leftBannerTxt">
                    <Image src={winBig} className="d-block mx-auto" fluid />
                    <Image
                      src={InBitsky}
                      className="InBitsky d-inline-block text-center"
                      fluid
                    />
                  </div>
                  {/* <h1 className="bannerTxt">In Bitsky</h1> */}

                  <PlayButton label="Play Now" className="custom-class" />

                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="bannerRight">
                <div className="vendingMachine text-center">
                  <Image src={vendingMachImg} fluid />
                  {/* <Image src={vendingEffect}  className="bgEffect" fluid /> */}
                </div>
                <Image src={cryptoCoin1} className="cryptoCoin1" fluid />
                <Image src={cryptoCoin2} className="cryptoCoin2" fluid />
                <Image src={cryptoCoin3} className="cryptoCoin3" fluid />
                <Image src={cryptoCoin4} className="cryptoCoin4" fluid />
                <Image src={cryptoCoin5} className="cryptoCoin5" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="marqueeWrapper">
        <ScrollingText />
      </div>
    </>
  );
};

export default Banner;
