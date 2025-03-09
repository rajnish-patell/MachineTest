import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./Header.css";
import bigWin from "../../assets/images/bigWin.png";
import plusBlack from "../../assets/images/plusBlack.svg";
import user from "../../assets/images/user.png";
import headerRightBg from "../../assets/images/headerBg.png";
import headerLogo from "../../assets/images/headerLogo.png";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <Link to="/" className="headerLogo">
          <img src={headerLogo} alt="logo" />
          <h2>In Bitsky</h2>
        </Link>
        <div className="headerRight">
          <div className="headerRightinnerWrap">
            <img className="headerightBg" src={headerRightBg} alt="" />
            <img className="bigWinLogo" src={bigWin} alt="logo" />
            <div className="amountHead">
              <span>10,000</span>
              <span>USD</span>
              <Button className="addBtn">
                <img src={plusBlack} alt="add" />
              </Button>
            </div>
            <Dropdown className="headerDropdown">
              <Dropdown.Toggle id="dropdown-basic">
                <img className="userImg" src={user} alt="user" />
                <span>John123</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="headwrappermob">
        <img className="bigWinLogo" src={bigWin} alt="logo" />
        <div className="amountHead">
          <span>10,000</span>
          <span>USD</span>
          <Button className="addBtn">
            <img src={plusBlack} alt="add" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
