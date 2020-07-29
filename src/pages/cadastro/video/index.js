import React from 'react';
import { Link } from 'react-router-dom';    
import PageDefault from '../../../components/PageDefault';

function cadastroVideo(){
    return(
      <PageDefault>
        <h1>Bem vindo ao cadastro de um novo vídeo.</h1>

        <Link to="/cadastro/categoria"> {/* nesse caso como estamos usando o link ao inves de usarmos o href usamos o to */}
            Cadastrar Categoria
        </Link>

      </PageDefault>
    )
}

export default cadastroVideo;