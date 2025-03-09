import React from "react";
import Banner from "../../components/Banner/Banner";
import ReferYourFriend from "../../components/ReferYourFriend/ReferYourFriend";
import GameSection from "../../components/GameSection/GameSection";

const HomePage = () => {
  return (
    <main className="main-content">
      <Banner />
      <ReferYourFriend />
      <GameSection />
      
    </main>
  );
};

export default HomePage;
