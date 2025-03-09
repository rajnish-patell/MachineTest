import React from "react";

import pg1 from "../../assets/images/pg1.png";
import pg2 from "../../assets/images/pg2.png";
import pg3 from "../../assets/images/pg3.png";
import pg4 from "../../assets/images/pg4.png";
import pg5 from "../../assets/images/pg5.png";
import pg6 from "../../assets/images/pg6.png";
import pg7 from "../../assets/images/pg7.png";
import pg8 from "../../assets/images/pg8.png";
import pg9 from "../../assets/images/pg9.png";
import pg10 from "../../assets/images/pg10.png";
import heart from "../../assets/images/heart.svg";

// import gamePlayBtn from "../../assets/images/GamePlayBtn.png";
import "./PopularGame.css";
import { Container, Image } from "react-bootstrap";
import PlayButton from "../ui/Button";

const games = [
  { id: 1, image: pg1 },
  { id: 2, image: pg2 },
  { id: 3, image: pg3 },
  { id: 4, image: pg4 },
  { id: 5, image: pg5 },
  { id: 6, image: pg6 },
  { id: 7, image: pg7 },
  { id: 8, image: pg8 },
  { id: 9, image: pg9 },
  { id: 10, image: pg10 },
];

const PopularCard = ({ image }) => (
  <div className="gamesColumn">
    <div className="gameCard">
      <img src={image} alt="top game" />
      {/* <div className="favoriteIcon">
        <img src={heart} alt="favorite" />
      </div> */}
      {/* <Button className="gamePlayBtn" style={{ backgroundImage: `url(${gamePlayBtn})` }}>
        Play Now
      </Button> */}
       <div className="favoriteIcon">
        <Image src={heart} alt="favorite" />
      </div>

      <PlayButton label="Play Now" className="topGameBtn" />
    </div>
  </div>
);

const TopGamesSection = () => {
  return (
    <section className="topGamesSection mb-100">
      <Container className="custom-container container">
        <div className="headingWrapper">
          <h2>Popular Games</h2>
          <span className="dividerLine"></span>
        </div>
        <div className="gamesRow">
          {games.map((game) => (
            <PopularCard key={game.id} image={game.image} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopGamesSection;
