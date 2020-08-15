import React from 'react';
import PageDefault from '../../../src/components/PageDefault';
import patienceImg from '../../assets/img/paciencia.png';

function Pagina404(){
    return(
      <PageDefault>
        <div>
          <h1>.:Página 404:.</h1>
          Ops, me desculpe, mas ainda não tem nada por aqui, tente outro endereço ou tente novamente mais tarde!
        </div>
        <br></br>
        <div>
          {/* eslint-disable-next-line */}
          <img src={ patienceImg } width='200'/>
        </div>
      </PageDefault>
    )
}
export default Pagina404;