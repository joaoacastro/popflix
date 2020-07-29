import React from 'react';
import { Link } from 'react-router-dom';    
import PageDefault from '../../../components/PageDefault';

function cadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/"> {/* nesse caso como estamos usando o link ao inves de usarmos o href usamos o to */}
            Ir para home
        </Link>

      </PageDefault>
    )
}

export default cadastroCategoria;