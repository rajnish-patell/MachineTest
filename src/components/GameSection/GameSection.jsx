import React from "react";
import "./GameSection.css";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import playOffmarket from "../../assets/images/offMarket.png";
import playOffBtn from "../../assets/images/playOffBtn.png";
import PlayButton from "../ui/Button";

const GameSection = () => {
  return (
 
      <section className="gameSection mb-100">
        <Container className="custom-container">
          <div className="gameSectionBg">
           <div className="gameSectionVector">
           <Image
              className="gameSectionAbs"
              src={playOffmarket}
              alt="playoff"
            />
           </div>
            <Link href="/" className="gameSectionBtn">
              <Image className="playOffBtn" src={playOffBtn} fluid/>
            </Link>
          </div>
        </Container>
      </section>
    
  );
};

export default GameSection;
