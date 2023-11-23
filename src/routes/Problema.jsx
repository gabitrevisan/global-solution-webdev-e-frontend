import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Problema() {

  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="custom-font">
          <center>A falta de integração entre as Unidades de Pronto Atendimento e as Unidades Básicas de Saúde...</center>
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled className="custom-font">
        <center>...e como a população é afetada diariamente por isso.</center>
        </ListGroup.Item>
      </ListGroup>

      <div className="card_container">
        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            Desde sua implementação, as Unidades de Pronto Atendimento (UPA) têm sido um ponto crucial no
            atendimento emergencial à saúde ao sempre operarem com máxima capacidade. No entanto, uma lacuna
            persistente tem sido a desconexão com as Unidades Básicas de Saúde (UBS), resultando em dificuldades
            significativas para o agendamento de consultas especializadas, como por exemplo nas áreas de cardiologia
            e neurologia.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            A falta de um sistema integrado que facilite a transição do atendimento de emergência para a
            continuidade do cuidado nas UBSs tem sido uma barreira constante. Isso impacta diretamente na
            qualidade de vida dos pacientes que necessitam de acompanhamento especializado após uma visita à UPA,
            pois o agendamento de consultas específica, torna-se complexo e, por vezes, inacessível, na maneira em
            que o próprio paciente tem que marcá-la.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            Essa desconexão entre os serviços de emergência e a sequência de assistência afeta diretamente a
            qualidade de vida dos pacientes. A ausência de um sistema eficiente de encaminhamento e agendamento
            de consultas especializadas compromete não apenas a eficácia do tratamento, mas também prolonga o
            tempo de espera, gerando angústia e potenciais complicações de saúde para aqueles que buscam atendimento
            contínuo e direcionado.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="card_container">
        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            A necessidade premente é a implementação de um sistema unificado que permita a comunicação ágil entre
            UPAs e UBSs. Esse sistema possibilitaria não apenas o registro imediato das necessidades do paciente,
            mas também a facilitação do agendamento e encaminhamento para consultas especializadas, como as de
            cardiologia e neurologia, citadas anteriormente.
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            Além disso, a conscientização sobre a importância desse sistema entre os profissionais de saúde e
            os pacientes é essencial. Educar e informar sobre os benefícios de um sistema conectado ajudaria a
            promover o acesso adequado aos cuidados de saúde, diminuindo as lacunas existentes entre os serviços
            de emergência e os de atenção primária.
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card style={{ width: "26.6rem" }}>
          <Card.Body>
            <Card.Text>
            Em suma, a ausência de um sistema que conecte eficientemente as UPAs com as UBSs cria um obstáculo
            significativo no acesso e na continuidade do cuidado para consultas especializadas, como as de
            cardiologia e neurologia. A implementação de um sistema integrado é imperativa para garantir um
            atendimento eficaz e contínuo, priorizando a saúde e o bem-estar dos pacientes.
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

export default Problema;