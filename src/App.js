import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux'

// importting page
import Home from './pages/home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Product from './pages/Product'
import Edit from './pages/edit'

import store from './redux/store'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/login' render ={(props)=><Login {...props} />} />
          <Route path="/signup" component={Signup} />
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/product" render={()=><Product/>}/>
        </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App