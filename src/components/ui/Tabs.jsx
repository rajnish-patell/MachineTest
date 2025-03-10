import { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tabTitle from "../../assets/images/tabTitle.png";
import formLeftImg from "../../assets/images/formLeftImg.png";
import leftCorner from "../../assets/images/leftCorner.png";
import rightCorner from "../../assets/images/rightCorner.png";
import rightBottomCorner from "../../assets/images/rightBottomCorner.png";
import leftBottomCorner from "../../assets/images/leftBottomCorner.png";
import PlayButton from "./Button";

function CustomTabs() {
  const [activeTab, setActiveTab] = useState("My-Account");
  const [filledInputs, setFilledInputs] = useState({
    first: false,
    last: false,
    user: false,
    birthDate: false,
    email: false,
    number: false,
  });
  const [activeInput, setActiveInput] = useState(null);

  const handleBlur = (e, field) => {
    setActiveInput(null);
    setFilledInputs((prev) => ({
      ...prev,
      [field]: e.target.value.trim() !== "",
    }));
  };

  return (
    <div className="customTabs">
      <Container className="custom-container">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="customTabsWrapper"
          fill
        >
          <Tab eventKey="My-Account" title="My Account">
            <div className="myAccount">
              <div className="tabtitle">
                <img src={tabTitle} alt="tabTitle" className="img-fluid"/>
              </div>
              <div className="myAccountWrapper">
                <div className="formLeft">
                  <img src={formLeftImg} alt="formLeftImg" />
                </div>
                <div className="formRight">
                  <div className="formGroup">
                    <div
                      className={`inputBox ${
                        activeInput === "first" || filledInputs.first
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="First Name"
                        onFocus={() => setActiveInput("first")}
                        onBlur={(e) => handleBlur(e, "first")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                    <div
                      className={`inputBox ${
                        activeInput === "last" || filledInputs.last
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Last Name"
                        onFocus={() => setActiveInput("last")}
                        onBlur={(e) => handleBlur(e, "last")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                  </div>
                  <div className="formGroup">
                    <div
                      className={`inputBox ${
                        activeInput === "user" || filledInputs.user
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="User Name"
                        onFocus={() => setActiveInput("user")}
                        onBlur={(e) => handleBlur(e, "user")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                    <div
                      className={`inputBox ${
                        activeInput === "birthDate" || filledInputs.birthDate
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Birth date"
                        onFocus={() => setActiveInput("birthDate")}
                        onBlur={(e) => handleBlur(e, "birthDate")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                  </div>
                  <div className="formGroup">
                    <div
                      className={`inputBox ${
                        activeInput === "email" || filledInputs.email
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="email"
                        placeholder="Email Address"
                        onFocus={() => setActiveInput("email")}
                        onBlur={(e) => handleBlur(e, "email")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                    <div
                      className={`inputBox ${
                        activeInput === "number" || filledInputs.number
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Phone Number"
                        onFocus={() => setActiveInput("number")}
                        onBlur={(e) => handleBlur(e, "number")}
                      />
                      <span className="linearBorder"></span>
                    </div>
                  </div>

                  <div className="text-end">
                    <PlayButton label="Play Now" className="formBtn refCardBtn" />
                  </div>
                </div>
              </div>

              <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Wallet" title="Wallet">
            <h1 className="text-center">Tab content for Wallet</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
          <Tab eventKey="All-Transactions" title="All Transactions">
            <h1 className="text-center">Tab content for All Transactions</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
          <Tab eventKey="My-Affiliates" title="My Affiliates">
            <h1 className="text-center">Tab content for  My Affiliates</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default CustomTabs;
