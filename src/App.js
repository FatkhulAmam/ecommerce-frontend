import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import private root
import PrivateRoot from "./component/privateRoute";

// importing page public
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/DetailProduct";
import CategoryDetail from "./pages/CategoryDetail";

//importing page custommer
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Profile from "./pages/Profile";
import Address from "./pages/UserAddress";
import EditAddress from "./pages/ChangeAddres"

//importing page seller
import MyProduct from "./pages/MyProduct";
import AddProduct from "./pages/AddProduct";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route
          path="/product/:id"
          render={(props) => <ProductDetail {...props} />}
        />
        <Route
          path="/category/product/:id"
          render={(props) => <CategoryDetail {...props} />}
        />
        <Route path="/check_out" render={() => <CheckOut />} />
        <PrivateRoot path="/profile" exact>
          <Profile />
        </PrivateRoot>
        <PrivateRoot path="/cart" exact>
          <Cart />
        </PrivateRoot>
        <PrivateRoot path="/profile/address" exact>
          <Address />
        </PrivateRoot>
        <Route
          path="/profile/address/:id"
          component={(props) => <EditAddress {...props} />}
        />
        <Route
          path="/my_product"
          component={(props) => <MyProduct {...props} />}
        />
        <Route
          path="/add_product"
          component={(props) => <AddProduct {...props} />}
        />
        <Route path="/edit/:id" component={(props) => <Edit {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
