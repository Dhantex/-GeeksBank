import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import {Home} from '../Pages/Home'
import {Layout} from '../Layout'
import {NotFound} from '../NotFound'

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </Layout>
</BrowserRouter>
  );
}

export default App;
