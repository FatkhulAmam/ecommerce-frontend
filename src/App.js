import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import private root
import PrivateRoot from './component/privateRoute'

// importing page public
import Home from './pages/home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/DetailProduct'
import CategoryDetail from './pages/CategoryDetail'

//importing page custommer
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Profile from './pages/Profile'

//importing page seller
import Edit from './pages/edit'

class App extends React.Component{
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.setToken(localStorage.getItem('token'));
    }
  }

  render(){
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={Signup} />
          <Route path='/login' render ={(props)=><Login {...props} />} />
          <Route path="/detail/product" render={()=><Product/>}/>
          <Route path="/category/product" render={()=><CategoryDetail/>}/>
          <Route path="/cart" render={()=><Cart/>}/>
          <Route path="/check_out" render={()=><CheckOut/>}/>
          <PrivateRoot path='/profile'>
            <Profile/>
          </PrivateRoot>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App