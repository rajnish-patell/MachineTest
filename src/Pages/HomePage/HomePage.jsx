import React from "react";
import Banner from "../../components/Banner/Banner";
import ReferYourFriend from "../../components/ReferYourFriend/ReferYourFriend";
import GameSection from "../../components/GameSection/GameSection";
import PopularGame from "../../components/PopularGame/PopularGame";
import SubscribeNews from "../../components/SubscribeNews/SubscribeNews";
import SocialSection from "../../components/socialMedia/SocialSection";

const HomePage = () => {
  return (
    <main className="main-content">
      <Banner />
      <ReferYourFriend />
      <GameSection />
      <PopularGame /> 
      <SubscribeNews /> 
      <SocialSection />
    </main>
  );
};

export default HomePage;
