import React from "react";

const PlayButton = ({ label = "Play Now", onClick, className = "" }) => {
  return (
    <a href="#" className={`playBtn ${className}`} onClick={onClick}>
      <span>{label}</span>
    </a>
  );
};

export default PlayButton;
