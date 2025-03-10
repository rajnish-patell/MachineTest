import React from "react";
import Header from "../../components/Header/Header";
import CustomTabs from "../../components/ui/Tabs";
import { Container } from "react-bootstrap";

const MyAccount = () => {
  return (
    <main className="main-content">
      <Header />
      <div className="tabWrapper">
        <Container className="custom-container">
          <CustomTabs />
        </Container>
      </div>
    </main>
  );
};

export default MyAccount;
