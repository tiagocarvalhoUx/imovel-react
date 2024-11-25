import styled from "styled-components";
import BannerImg from "../../assets/banner-imovel.jpg";

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${BannerImg});
  :before {
    background-color: rgba(0, 0, 0, 0.1);
    content: "";
    position: absolute;
    top: -50px;
    left: -150px;
    width: 259%;
    height: 156%;
    z-index: -1;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    font-size: 3.875rem;
    margin-bottom: 25px;
  }
  p {
    color: var(--white);
    text-align: justify;
    margin-right: 5px;
  }
`;
