import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
  padding: 10px;

  border: 1px solid rgb(0, 0, 0, 0.1);
`;

export const Thumb = styled.div`
  img {
    width: 500px;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;

  h2,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const Right = styled.div`
  width: 35%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescription = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileFormContact = styled.div`
  h3,
  p,
  button {
    margin-bottom: 15px;
    color: var(--secondary);
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
