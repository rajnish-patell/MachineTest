import React from "react";
import Marquee from "react-fast-marquee";
import ListGroup from "react-bootstrap/ListGroup";
import { Image } from "react-bootstrap";
import downloadIcon from "../../assets/images/downloadIcon.gif";

const ScrollingText = () => {
  return (
    <>
      <Marquee speed={150} gradient={false}>
        <ListGroup className="marqueeTxt" horizontal>
          <ListGroup.Item className="p-0 m-0 border-0 bg-transparent text-white">
            Welcome to <span>Bitsky</span>
          </ListGroup.Item>
          <ListGroup.Item className="p-0 m-0 border-0 bg-transparent text-white">
            Welcome to <span>Bitsky</span>
          </ListGroup.Item>
          <ListGroup.Item className="p-0 m-0 border-0 bg-transparent text-white">
            Welcome to <span>Bitsky</span>
          </ListGroup.Item>
          <ListGroup.Item className="p-0 m-0 border-0 bg-transparent text-white">
            Welcome to <span>Bitsky</span>
          </ListGroup.Item>
        </ListGroup>
      </Marquee>

      <div className="downloadIcon">
        <a href="/#referSection">
          <Image src={downloadIcon} fluid />
        </a>
      </div>
    </>
  );
};

export default ScrollingText;
