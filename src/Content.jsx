// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Principal } from './pastas/Principal';
import { Heart } from './pastas/Heart';
import { Filme } from './pastas/Filme';
import { Cadastro } from './Cadastro';
import Info from './pastas/Info';

export const Content = () => {
  return (
    <Switch>

        <Route exact path='/filme/:id' component={ Filme }/>
        <Route exact path='/heart' component={ Heart }/>
        <Route exact path='/info' component={ Info }/>
        <Route exact path='/cadastro' component={ Cadastro }/>
        <Route exact path='/' component={ Principal }/>
 
    </Switch>
  )
}
