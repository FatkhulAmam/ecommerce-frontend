import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// importting page
import Home from './pages/home'
import Episode from './pages/Episode'
import Product from './pages/Product'
import Edit from './pages/edit'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/episode" component={Episode} />
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/product" component={Product}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App