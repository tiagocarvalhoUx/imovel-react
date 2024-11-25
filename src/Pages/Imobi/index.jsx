import React, { Fragment } from "react";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileImg,
  Right,
  Thumb,
  ProfileDescription,
  ProfileContact,
  ProfileFormContact,
} from "./styles";
import TopBanner from "../../components/TopBanner";
import BannerImov from "../../../src/assets/banner-imovel.jpg";
import Prefil from "../../assets/profile1.png";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Button from "../../components/Button";
const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src={BannerImov} alt="" />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              modi magnam amet aliquid sapiente nam quaerat, veritatis
              exercitationem facilis accusantium iure, sed odit? Ex impedit,
              esse dolore officia dignissimos praesentium.
            </p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src={Prefil} alt="profile" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon Due</h3>
              <p>Descrição do usuário</p>
              <p>teste@teste.com</p>
            </ProfileDescription>
            <ProfileContact>
              <h3>Informações para contato:</h3>
              <p>(11) 111-1111</p>
              <p>teste@teste.com</p>
            </ProfileContact>
            <ProfileFormContact>
              <h3>Contate o anunciante</h3>
              <form>
                <Input type="text" placeholder="Nome:" />
                <Input type="text" placeholder="Email:" />
                <Textarea type="text" placeholder="Mensagem:" />
                <Button>Enviar Mensagem</Button>
              </form>
            </ProfileFormContact>
          </Profile>
        </Right>
      </Container>
    </Fragment>
  );
};
export default Imobi;
