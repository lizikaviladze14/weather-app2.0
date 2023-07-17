import "./splash-screen.scss";
import React from "react";

const SplashScreen: React.FC = () => {
  return (
    <div className={"splash-screen"}>
      <img src={"/weather.webp"} alt={"weather"} />
    </div>
  );
};

export default SplashScreen;
