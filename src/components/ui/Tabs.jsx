import React, { useState, useEffect } from "react";
import { Tabs, Tab, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgTopRight from "../../assets/images/right-top-tabs-cor.png";
import ImgTopLeft from "../../assets/images/left-top-tabs-cor.png";
import ImgBottomRight from "../../assets/images/right-bottom-tabs-cor.png";
import ImgbottomLeft from "../../assets/images/left-bottom-tabs-cor.png";
import LeftImgTabs from "../../assets/images/FirstLast.png";
import PlayButton from "./Button";

function CustomTabs() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);



  return (
    <>
      <div className="tabDesignSection">
        <div className="container">
          <Row>
            <Col md={12}>
              {isMobile ? (
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> My Account </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <div className="tabsBodyDesign">
                          <span className="topLeftCor">
                            <img src={ImgTopLeft} alt="" />
                          </span>
                          <span className="topRightCor">
                            <img src={ImgTopRight} alt="" />
                          </span>
                          <span className="bottomLeftCor">
                            <img src={ImgbottomLeft} alt="" />
                          </span>
                          <span className="bottomRightCor">
                            <img src={ImgBottomRight} alt="" />
                          </span>
                          <div className="tabsBodyContent">
                            <div className="midContent">
                              <div className="headTabs">
                                <h2>My Account</h2>
                              </div>
                              <div className="contentBox d-flex flex-wrap">
                                <div className="leftImgBox">
                                  <div className="imgBox">
                                    <img src={LeftImgTabs} alt="" />
                                  </div>
                                  <div className="textBox">
                                    <h6>
                                      First <span>Last</span>
                                    </h6>
                                    <p>Name</p>
                                  </div>
                                </div>
                                <div className="rightContentBox">
                                  <div className="innerBoxRight">
                                    <ul>
                                      <li className="Active d-flex flex-wrap">
                                        <span className="leftName">
                                          <input
                                            type="text"
                                            placeholder="First Name"
                                          />
                                        </span>
                                        <span className="rightName">
                                          <input
                                            type="text"
                                            placeholder="Last Name"
                                          />
                                        </span>
                                      </li>
                                      <li className=" d-flex flex-wrap">
                                        <span className="leftName">
                                          <input
                                            type="text"
                                            placeholder="User Name"
                                          />
                                        </span>
                                        <span className="rightName">
                                          <input
                                            type="text"
                                            placeholder="Date of Birth"
                                          />
                                        </span>
                                      </li>
                                      <li className=" d-flex flex-wrap">
                                        <span className="leftName">
                                          <input
                                            type="text"
                                            placeholder="Email Address"
                                          />
                                        </span>
                                        <span className="rightName">
                                          <input
                                            type="text"
                                            placeholder="Phone Number"
                                          />
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="PlayBtnWrap text-end">
                                  <PlayButton label="Play Now" className="refCardBtn" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span>Wallet</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My Wallet</h2>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>All Transactions</Accordion.Header>
                    <Accordion.Body>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My All Transactions</h2>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>My Affiliates</Accordion.Header>
                    <Accordion.Body>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My Affiliates</h2>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <Tabs
                  defaultActiveKey="MyAccount"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="MyAccount" title="My Account">
                    <div>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor">
                          <img src={ImgTopLeft} alt="" />
                        </span>
                        <span className="topRightCor">
                          <img src={ImgTopRight} alt="" />
                        </span>
                        <span className="bottomLeftCor">
                          <img src={ImgbottomLeft} alt="" />
                        </span>
                        <span className="bottomRightCor">
                          <img src={ImgBottomRight} alt="" />
                        </span>
                        <div className="tabsBodyContent">
                          <div className="midContent">
                            <div className="headTabs">
                              <h2>My Account</h2>
                            </div>
                            <div className="contentBox d-flex flex-wrap">
                              <div className="leftImgBox">
                                <div className="imgBox">
                                  <img src={LeftImgTabs} alt="" />
                                </div>
                                <div className="textBox">
                                  <h6>
                                    First <span>Last</span>
                                  </h6>
                                  <p>Name</p>
                                </div>
                              </div>
                              <div className="rightContentBox">
                                <div className="innerBoxRight">
                                  <ul>
                                    <li className="Active d-flex flex-wrap">
                                      <span className="leftName">
                                        <input
                                          type="text"
                                          placeholder="First Name"
                                        />
                                      </span>
                                      <span className="rightName">
                                        <input
                                          type="text"
                                          placeholder="Last Name"
                                        />
                                      </span>
                                    </li>
                                    <li className=" d-flex flex-wrap">
                                      <span className="leftName">
                                        <input
                                          type="text"
                                          placeholder="User Name"
                                        />
                                      </span>
                                      <span className="rightName">
                                        <input
                                          type="text"
                                          placeholder="Date of Birth"
                                        />
                                      </span>
                                    </li>
                                    <li className=" d-flex flex-wrap">
                                      <span className="leftName">
                                        <input
                                          type="text"
                                          placeholder="Email Address"
                                        />
                                      </span>
                                      <span className="rightName">
                                        <input
                                          type="text"
                                          placeholder="Phone Number"
                                        />
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="PlayBtnWrap text-end">
                                <PlayButton label="Play Now" className="refCardBtn" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Wallet" title="Wallet">
                    <div>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My Wallet</h2>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="AllTransactions" title="All Transactions">
                    <div>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My All Transactions</h2>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="MyAffiliates" title="My Affiliates">
                    <div>
                      <div className="tabsBodyDesign">
                        <span className="topLeftCor"></span>
                        <span className="topRightCor"></span>
                        <span className="bottomLeftCor"></span>
                        <span className="topRightCor"></span>
                        <div className="tabsBodyContent">
                          <h2 className="text-center">My Affiliates</h2>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default CustomTabs;
