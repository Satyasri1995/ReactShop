import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "../widgets/NavBar";
import Cart from "./Cart";
import EditProduct from "./EditProduct";
import Orders from "./Orders";
import Products from "./Products";
import Welcome from "./Welcome";

const Shop = (props) => {
    const { url } = useRouteMatch();
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={`${url}/welcome`}>
          <Welcome />
        </Route>
        <Route path={`${url}/products`} exact>
          <Products />
        </Route>
        <Route path={`${url}/cart`}>
          <Cart />
        </Route>
        <Route path={`${url}/orders`}>
          <Orders />
        </Route>
        <Route path={`${url}/product`} exact>
          <EditProduct />
        </Route>
        <Route path={`${url}`}>
          <Redirect to={`${url}/welcome`}/>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Shop;
