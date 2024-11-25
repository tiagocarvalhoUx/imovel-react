import React, { Fragment } from "react";
import { Container, Copy, Item } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../../src/assets/logo-imob.png";
const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dolore expedita ratione ad autem recusandae, ut commodi?
          </p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>

        <Item>
          <h3> Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3> Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3> Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>@ Copyright 2022 - Worksite All Rights Reserved </p>
        <ul>
          <li>
            <span>Termo de Uso</span>
          </li>
          <li>
            <span>Política de Privacidade</span>
          </li>
          <li>
            <span>Política de Cookies</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
