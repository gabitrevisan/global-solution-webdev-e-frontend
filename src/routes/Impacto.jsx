import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Impacto() {

  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="custom-font">
          <center>Um grande impacto esperado na vida da população,</center>
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled className="custom-font">
        <center>vindo de uma grande ideia & solução.</center>
        </ListGroup.Item>
      </ListGroup>

      <div className="card_container">
        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            A implementação bem-sucedida do projeto de integração entre a Unidade de Pronto Atendimento (UPA) e
            a Unidade Básica de Saúde (UBS) promete uma mudança significativa na experiência dos pacientes e na
            eficiência do sistema de saúde de São Paulo. Ao eliminar as barreiras entre os diferentes pontos de
            atendimento, nossa plataforma visa oferecer um acesso mais ágil e direto aos serviços médicos
            necessários, reduzindo o tempo de espera e os obstáculos enfrentados pelos pacientes em busca de
            cuidados contínuos.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            Além de simplificar o processo de agendamento e garantir um fluxo mais eficiente entre as unidades de
            saúde, esperamos mitigar a ansiedade dos pacientes e evitar duplo-agendamentos, proporcionando um
            atendimento mais direcionado e personalizado.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>

    <div className="card_container">
        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            A nossa solução não apenas otimizará o fluxo de pacientes entre essas unidades, mas também tem o
            potencial de criar um impacto social mais amplo. Ao melhorar a acessibilidade aos cuidados médicos,
            estamos trabalhando para reduzir as disparidades no sistema de saúde, promovendo um ambiente mais
            equitativo para todos os cidadãos de São Paulo.
            </Card.Text>
          </Card.Body>
          </Card>

        <Card style={{ width: "33.3rem" }}>
          <Card.Body>
            <Card.Text>
            Nosso objetivo é não apenas resolver a dificuldade de continuidade no tratamento de saúde, mas
            também contribuir para uma transformação no setor, oferecendo um modelo que possa ser expandido
            para outras regiões e serviços de saúde, criando uma base sólida para um sistema de saúde mais
            integrado e eficaz em toda a cidade.
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

export default Impacto;