import { Container, Description, Img, Itens } from "./styles";
import Foto1 from "../../assets/card-imovel.png";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Container>
      <Img>
        <img src={Foto1} alt="imovel-01" />
        <h4>Apartamento</h4>
        <h5 className="bairro">
          <FaMapMarkerAlt />
          Vila Buarque, São Paulo
        </h5>
        <br />
        <h6 className="valor">R$ 2.400,00 / mês</h6>
        <br />
        <Link to="/imovel">
          Detalhes <FaArrowRight />
        </Link>
      </Img>

      <Description>
        <Itens></Itens>
      </Description>
    </Container>
  );
};
export default Card;
