import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

//exact é uma função que delimita o componente a buscar somente o que está entre aspas

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/> 
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/new" component={New}/>
      </Switch>
    </BrowserRouter>
  )
}