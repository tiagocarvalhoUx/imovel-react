import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 350px;
  padding: 2px;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 2px 5px;
  }
  h5 {
    padding: 8px 5px;
    margin-top: -10px;
    font-weight: 500;
    font-size: 18px;
  }
  h6 {
    margin-top: -20px;
    padding: 5px 5px;
    font-weight: 400;
    font-size: 15px;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
    padding: 0px 5px;
    margin-top: -15px;
  }
`;

export const Description = styled.div`
  padding: 12px;
  margin-top: 30%;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
