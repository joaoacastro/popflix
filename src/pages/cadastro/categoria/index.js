import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, blabla...
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('hey hey')
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP) /* fetch = buscar dados - pegar coisas */
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <div className="box">

          <FormField
            label="Nome da Categoria: "
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição: "
            type="textarea :"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

        </div>
        {' '}
        {/* box */}

        <br />
        <Button>
          Cadastrar
        </Button>
      </form>
      
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      {/*
        <Link to="/"> nesse caso como estamos usando o link ao inves de usarmos o href usamos o to
            Ir para home
        </Link>
        */}
    </PageDefault>
  );
}

export default CadastroCategoria;
