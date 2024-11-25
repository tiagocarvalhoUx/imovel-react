import styled from "styled-components";
import BannerImg from "../../assets/banner-imovel.jpg";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${BannerImg});
  :before {
    background-color: rgba(0, 0, 0, 0.1);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
export const Text = styled.div`
  width: 73%;
  padding: 10px 2px;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
  }
  p {
    color: var(--white);
    margin-bottom: 25px;
  }
  span {
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 120px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
