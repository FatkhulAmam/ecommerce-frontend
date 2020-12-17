import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import private root
import PrivateRoot from "./component/privateRoute";

// importing page public
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/DetailProduct";
import CategoryDetail from "./pages/CategoryDetail";

//importing page custommer
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Profile from "./pages/Profile";
import Address from "./pages/userAddress";

//importing page seller
import MyProduct from "./pages/MyProduct";
import addProduct from "./pages/addProduct";
import Edit from "./pages/edit";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("token"));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/detail/product" render={() => <ProductDetail />} />
          <Route path="/category/product" render={() => <CategoryDetail />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/check_out" render={() => <CheckOut />} />
          // path for loged user
          <PrivateRoot path="/profile" exact>
            <Profile />
          </PrivateRoot>
          <Route path="/user/address" render={() => <Address />} />
          // path for seller
          <Route path="/my_product" component={MyProduct} />
          <Route path="/add_product" component={addProduct} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
