import { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Test.css";

function CustomTabs() {
  const [activeTab, setActiveTab] = useState("My-Account");

  return (
    <div className="customTabs">
      <Container className="custom-container">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="customTabsWrapper"
          className="mb-3"
          fill
        >
          <Tab eventKey="My-Account" title="My Account">
            Tab content for My Account
          </Tab>
          <Tab eventKey="Wallet" title="Wallet">
            Tab content for Wallet
          </Tab>
          <Tab eventKey="All-Transactions" title="All Transactions">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="My-Affiliates" title="My Affiliates">
            Tab content for MyAffiliates
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default CustomTabs;