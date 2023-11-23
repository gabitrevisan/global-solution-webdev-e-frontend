import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Sobre() {

  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="custom-font">
          <center>Conheça a SUSTech, uma resposta inovadora e tecnológica para a saúde pública!</center>
        </ListGroup.Item>
      </ListGroup>
      
      <div className="card_container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/produto-net-3.jpg" />
          <Card.Body>
            <Card.Title>Início</Card.Title>
            <Card.Text>
              Criada do zero, a SUSTech é um projeto de faculdade que busca
              melhorar a saúde pública.
            </Card.Text>
            <Link to="/home">
              <Button variant="primary">Saiba Mais</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/produto-net-4.jpg" />
          <Card.Body>
            <Card.Title>Plataforma</Card.Title>
            <Card.Text>
              A plataforma é altamente intuitiva e interativa que, até o momento,
              está disponível apenas para médicos.
            </Card.Text>
            <Link to="/Solucao">
              <Button variant="primary">Saiba Mais</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/produto-net-5.jpg" />
          <Card.Body>
            <Card.Title>Melhorias</Card.Title>
            <Card.Text>
              Buscamos introduzir um processo melhor e rápido para o agendamento de
              consultas.
            </Card.Text>
            <Link to="/Impacto">
              <Button variant="primary">Saiba Mais</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <ListGroup as="ul">
        <ListGroup.Item as="li" disabled  className="custom-font">
          <center>Abaixo, os fundadores da SUSTech</center>
        </ListGroup.Item>
      </ListGroup>
      
      <div className="card_container">
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src="./src/assets/gabriela.jpg" />
          <Card.Body>
            <Card.Title>Gabriela Trevisan</Card.Title>
            <Card.Text>
              Desenvolvedora Back-End com ênfase em PYTHON, é SCRUM Master do projeto
              e deseja contribuir com a criação de tecnologias sustentáveis que
              melhorem a vida da população.
            </Card.Text>
            <a href="https://www.linkedin.com/in/gabriela-trevisan-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"> Conecte-se no LinkedIn </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src="./src/assets/rafael.jpg" />
          <Card.Body>
            <Card.Title>Rafael Franck</Card.Title>
            <Card.Text>
              Além de ser desenvolvedor Front-End, é o Product Owner da equipe e
              tem participação ativa nas principais pesquisas do projeto,
              interagindo diretamente para melhorar a experiência do usuário.
            </Card.Text>
            <a href="https://www.linkedin.com/in/rafael-franck-731839267/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"> Conecte-se no LinkedIn </a>
          </Card.Body>
        </Card>
      </div>

      <section className="p-5 mt-4 bg-dark text-center text-light">
        <h5> Sistema Único de Saúde e Tecnologia © 2023 </h5>
      </section>
    </>
  );
}

export default Sobre;
