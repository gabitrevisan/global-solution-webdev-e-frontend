import { } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importando imagens utilizadas
import Imagem1 from '../assets/produto-net.jpg';
import Img1 from '../assets/cat-img-1.jpg';
import Img4 from '../assets/produto-net-2.jpg';
import Img5 from '../assets/produto-net-6.jpg';
import Img6 from '../assets/produto-net-7.jpg';
import Img7 from '../assets/produto-net-8.jpg';
import Img8 from '../assets/produto-net-9.jpg';
import Img9 from '../assets/produto-net-10.jpg';
import Img10 from '../assets/produto-net-11.jpg';
import Img11 from '../assets/produto-net-12.jpg';
import Img12 from '../assets/produto-net-13.jpg';
import ProdutoDetail1 from '../assets/product-detail-1.jpg';
import ProdutoDetail2 from '../assets/product-detail-2.jpg';
import ProdutoDetail3 from '../assets/product-detail-3.jpg';
import ProdutoDetail4 from '../assets/product-detail-4.jpg';
import Produto6 from '../assets/product-6.jpg';

function Home() {

    return (
        <>

          <section className="mb-4 p-5 bg-grey">
            <div className="row d-flex align-items-center justify-content-center hero">
              <div className="col-md-6 my-3">
                <h1 className="text-secondary">Sistema Único de Saúde e Tecnologia</h1>
                <h3 className="mb-3">Conheça a primeira plataforma integrada entre os sitemas públicos de saúde brasileiros</h3>
                <a href="" className="btn btn-dark">
                  Conheça o SUSTech
                </a>
              </div>
              <div className="col-md-6 my-3 text-center">
                <img src={Imagem1} alt="hero" className="img-fluid" />
              </div>
            </div>
          </section>

          <section className="my-5">
            <h4 className="text-center">Veja também</h4>
            <div className="row">
              <div className="col-md-6 col-lg-3 my-3 text-center">
                <img src={Img11} alt="" className="img-fluid" />
                <Link to="/sobre" className="btn btn-outline-dark my-3">
                  O que é o SUSTech?
                </Link>
              </div>
              <div className="col-md-6 col-lg-3 my-3 text-center">
                <img src={Produto6} alt="" className="img-fluid" />
                <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus" className="btn btn-outline-dark my-3" target="_blank" rel="noopener noreferrer">
                  O que é o SUS?
                </a>
              </div>
              <div className="col-md-6 col-lg-3 my-3 text-center">
                <img src={Img1} alt="" className="img-fluid" />
                <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/u/upa-24h" className="btn btn-outline-dark my-3" target="_blank" rel="noopener noreferrer">
                  O que são as UPAs?
                </a>
              </div>
              <div className="col-md-6 col-lg-3 my-3 text-center">
                <img src={Img12} alt="" className="img-fluid" />
                <a href="https://spdm.org.br/onde-estamos/outras-unidades/unidade-basica-de-saude-ubs/" className="btn btn-outline-dark my-3" target="_blank" rel="noopener noreferrer">
                  O que são as UBSs?
                </a>
              </div>
            </div>
          </section>

          <h4 className="text-center mb-3">Prévia do Produto</h4>
          <section className="mb-5 px-5 bg-grey">
            <div className="row d-flex">
              <div className="col-md-2 my-3">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={ProdutoDetail1}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={ProdutoDetail2}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img10}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img7}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img5}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img6}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img9}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Img8}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={ProdutoDetail4}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={ProdutoDetail3}
                      className="img-fluid my-2"
                      alt="Imagem do produto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 my-3 text-center">
                <img
                  src={Img4}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                  style={{ height: "535px" }}
                />
              </div>

              <div className="col-md-5 my-3 py-3">
                <div>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h2 className="my-2">Sistema Único de Saúde e Tecnologia</h2>
                <h5 className="text-secondary">por Gabriela & Rafael </h5>
                <p className="my-3">
                Uma interface que, à princípio, conecta a Unidade de Pronto Atendimento
                (UPA) com a Unidade Básica de Saúde (UBS); assim resolvendo o problema
                de pacientes que precisam de cuidados contínuos após ir à UPA, e possuem
                dificuldade em agendar um segmento, com a necessidade de encararem filas
                longas e demoradas, sem a certeza de que realmente conseguirão ser atendidos
                naquele lugar. <p>
                Com uma plataforma que integre essas duas unidades, o problema de
                enfrentar todo esse processo trabalhoso, e que muitas vezes agrava a
                situação do paciente, além de convergir para outros subproblemas,
                como por exemplo duplo-agendamentos e ansiedade naqueles que não
                conseguem receber os cuidados necessários, serão resolvidos.</p>

                </p>
                <Link to="/sobre" className="btn btn-dark my-3">
                  Saiba Mais
                </Link>
              </div>
            </div>
          </section>

          <section className="p-5 mt-4 bg-dark text-center text-light">
            <h5> Sistema Único de Saúde e Tecnologia © 2023 </h5>
          </section>
        </>
      );
    }

export default Home;