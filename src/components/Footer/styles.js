import styled from "styled-components";

export const Container = styled.div`
  margin-left: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 20px;
  background-color: var(--white);
`;

export const Item = styled.div`
  img {
    width: 200px;
  }
  h3 {
    margin-bottom: 10px;
    margin-left: 40px;
  }
  ul {
    li {
      padding: 12px 0;
      list-style-type: none;
      margin-left: 40px;
    }
  }
  nav {
    display: flex;
    margin-top: 15px;
    list-style-type: none;
    li {
      span {
        margin-right: 15px;
      }
    }
  }
`;

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  p {
    margin-left: -30px;
    font-size: 16px;
    font-weight: 500;
  }
  ul {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    li {
      list-style-type: none;
      span {
        margin-left: 15px;
      }
    }
  }
`;
