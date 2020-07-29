import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import cadastroVideo from './pages/cadastro/video';
import cadastroCategoria from './pages/cadastro/categoria';
import pagina404 from './pages/Pagina404'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        {/*O exact serve para estabelecer um "limite" para o navegador, ou seja, sem o exact na home no final da linha anterior e digitando /cadastro/video 
        no navegador ele nao encontraria a pagina /cadastro/video, pois como ele ja encontro uma barra no endereço então ele retorna a home, porém se estabelecermos
        com exact ele só roda a home se for exatamente como escrito no path, no caso apenas a barra.*/}
        <Route path="/cadastro/video" component={cadastroVideo} />
        <Route path="/cadastro/categoria" component={cadastroCategoria} />
        <Route component={pagina404} />
        {/* Sem o path a pagina fica recarregavel independente de qualquer coisa, ou seja, se nao achar nenhuma outra rota
        ele abre esse route */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);