import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card/index";
import Banner from "../../components/Banner";

const Home = () => {
  let Cards = [];
  for (let i = 0; i < 6; i++) {
    Cards.push(<Card key={i} />);
  }
  return (
    <Fragment>
      <Banner />
      <Header>
        <h2>Find the property of your dreams! </h2>
      </Header>
      <Wrapper>{Cards}</Wrapper>
    </Fragment>
  );
};

export default Home;
