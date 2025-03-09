import React from "react";
import './SubscribeNews.css'
import { Container, Image,Row,Col,Form } from "react-bootstrap";
import subscribe from "../../assets/images/subscribe.png";
import question from "../../assets/images/question.png";
import envelope from "../../assets/images/envelope.svg";
import PlayButton from "../ui/Button";

const SubscribeNews = () => {
  return (
    <section className="subscribeNews mb-100">
      <Container className="custom-container">
        <Row>
          <Col xl={6}>
            <div className="subscribeSection">
              <img className="subImg" src={subscribe} />
              <div className="subscribeContent">
                <h3>Subscribe to our news!</h3>
                <p>
                  Please provide your email to receive regular updates on our
                  promotions and tournaments.
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="iconInput">
                    <img className="iconInputImg" src={envelope} alt="email" />
                    <Form.Control
                      type="email"
                      placeholder="Your Email Address..."
                    />
                  </div>
                </Form.Group>
                <PlayButton label="Subscribe" className="refCardBtn" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="subscribeSection">
              <img className="subImg" src={question} alt="question" />
              <div className="subscribeContent">
                <h3>Got any questions?</h3>
                <p>
                  Visit our FAQ section for comprehensive information on
                  frequently asked questions.
                </p>
                <PlayButton label="FAQ Page" className="refCardBtn" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeNews;
