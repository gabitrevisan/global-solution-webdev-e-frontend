import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Contato() {

  const [listaUser, setListaUser] = useState([]);

  const schema = yup.object({
    nome: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O Campo email é obrigatório'),
    celular: yup.string().required('O campo celular é obrigatório'),
    numeroSUS: yup.string().required('O campo Número do SUS é obrigatório'),
    cep: yup.string().required('O campo CEP é obrigatório'),
    cidade: yup.string().required('O campo cidade é obrigatório'),
    bairro: yup.string().required('O campo bairro é obrigatório'),
    rua: yup.string().required('O campo rua é obrigatório'),
    numero: yup.string().required('O campo número é obrigatório'),
    complemento: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function inserirUser(user) {
    setListaUser([...listaUser, user]);
  }

  function buscarCep(e) {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        setValue('cidade', dados.localidade);
        setValue('bairro', dados.bairro);
        setValue('rua', dados.logradouro);
        setFocus('numero');
      });
  }

  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="custom-font">
          <center>Contato</center>
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled className="custom-font">
          <center>Por favor, insira seus dados abaixo para que possamos entrar em contato com você o mais rápido suficiente!</center>
        </ListGroup.Item>
      </ListGroup>

      <div className="card_container">
      <Card style={{ width: '101rem' }}>
      <Form onSubmit={handleSubmit(inserirUser)} className="p-4">

      <fieldset>
        <legend>Dados Pessoais:</legend>
        <div className="row">
          <div className="col-md-6">
            <label className="d-block mb-3">
              Nome Completo:
              <input type="text" {...register('nome')} className="espaco"/>
              <span>{errors.nome?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              E-Mail:
              <input type="text" {...register('email')} className="espaco"/>
              <span>{errors.email?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Número de Celular:
              <input type="text" {...register('celular')} className="espaco"/>
              <span>{errors.celular?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Número do SUS:
              <input type="text" {...register('numeroSUS')} className="espaco"/>
              <span>{errors.numeroSUS?.message}</span>
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Endereço:</legend>
        <div className="row">
          <div className="col-md-6">
            <label className="d-block mb-3">
              Número do CEP:
              <input type="text" {...register('cep')} onBlur={buscarCep} className="espaco"/>
              <span>{errors.cep?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Cidade:
              <input type="text" {...register('cidade')} className="espaco"/>
              <span>{errors.cidade?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Bairro:
              <input type="text" {...register('bairro')} className="espaco"/>
              <span>{errors.bairro?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Rua:
              <input type="text" {...register('rua')} className="espaco"/>
              <span>{errors.rua?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Número:
              <input type="text" {...register('numero')} className="espaco"/>
              <span>{errors.numero?.message}</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="d-block mb-3">
              Complemento:
              <input type="text" {...register('complemento')} className="espaco"/>
              <span>{errors.complemento?.message}</span>
            </label>
          </div>
        </div>
      </fieldset>

      <div className="text-center">
        <Button type="submit" variant="primary" style={{ marginRight: '8px', marginBottom: '8px' }}>
          Cadastrar
        </Button>
        <Button type="reset" variant="secondary" style={{ marginBottom: '8px' }}>
          Limpar
        </Button>
      </div>

    </Form>
  </Card>
</div>

      <section className="p-5 mt-4 bg-dark text-center text-light">
        <h5> Sistema Único de Saúde e Tecnologia © 2023 </h5>
      </section>
    </>
  );
}

export default Contato;