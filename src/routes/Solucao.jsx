import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Solucao() {

  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="custom-font">
          <center>Uma solução inovadora para a falta de integração entre os sistemas públicos de saúde!</center>
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled className="custom-font">
        <center>Como podemos implementá-la na vida real?</center>
        </ListGroup.Item>
      </ListGroup>

      <div className="card_container">
        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            A resolução foi a criação de uma interface que, à princípio, conecte a Unidade de Pronto Atendimento
            (UPA) com a Unidade Básica de Saúde (UBS); assim resolvendo a maior dor dos pacientes de unidades
            públicas que, quando iniciam seu tratamento emergencial na UPA e precisam de cuidados contínuos, é
            difícil agendar um segmento, pois muitas vezes eles precisam ir até uma UBS, e muitos sequer sabem
            desse fato, longe de onde foram atendidos anteriormente, e necessitam enfrentar filas longas e
            demoradas, sem a certeza de que realmente conseguirão ser atendidos naquele lugar, pois em casos
            contrários, terão de ir até outra unidade e repetir o procedimento inteiro por mais uma vez.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            Com uma plataforma que integre essas duas unidades, o problema de enfrentar todo esse processo
            trabalhoso e que muitas vezes agrava a situação do paciente, além de convergir para outros subproblemas,
            como por exemplo duplo-agendamentos e ansiedade naqueles que não conseguem receber os cuidados
            necessários, serão resolvidos.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <section className="p-5 mt-4 bg-dark text-center text-light">
        <h5> Sistema Único de Saúde e Tecnologia © 2023 </h5>
      </section>
      
    </>
  );
}

export default Solucao;