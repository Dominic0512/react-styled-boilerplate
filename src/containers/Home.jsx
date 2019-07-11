import React from "react";

import LogoImg from "assets/react-logo.png";

import { Title, MainContainer, ImgFrame } from "./HomeStyle";

const Home = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <ImgFrame>
          <img src={LogoImg} alt="" />
        </ImgFrame>
      </MainContainer>
      <Title>Welcome to Dominic React Boilerplate</Title>
    </React.Fragment>
  );
};

export { Home };
