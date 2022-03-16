import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "../widgets/NavBar";
import Cart from "./Cart";
import Orders from "./Orders";
import Products from "./Products";
import Welcome from "./Welcome";

const Shop = (props) => {
    const { url } = useRouteMatch();
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={`${url}`} exact>
          <Welcome />
        </Route>
        <Route path={`${url}/products`}>
          <Products />
        </Route>
        <Route path={`${url}/cart`}>
          <Cart />
        </Route>
        <Route path={`${url}/orders`}>
          <Orders />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Shop;
