import React, { useEffect } from "react";
import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <h2>Acesse Sua Conta</h2>
      <p>Cadastre para acessar sua conta</p>
      <ContainerForm>
        <Form>
          <Label>E-mail</Label>
          <Input type="text" placeholder="Informe seu E-mail" />
          <Label>Senha</Label>
          <Input type="text" placeholder="Informe sua senha" />
          <Button>Fazer Cadastro</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
