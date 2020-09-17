import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// importting page
import Home from './pages/home'
import Episode from './pages/Episode'
import Items from './pages/items'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/episode" component={Episode} />
          <Route path="/items" component={Items}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App