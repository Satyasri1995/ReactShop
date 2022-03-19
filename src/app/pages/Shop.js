import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { fetchCart, SaveCart } from "../store/Actions/CartHttpActions";
import { fetchOrders, SaveOrders } from "../store/Actions/OrderHttpActions";
import { fetchProducts, saveProducts } from "../store/Actions/ProductHttpActions";
import NavBar from "../widgets/NavBar";
import Cart from "./Cart";
import EditProduct from "./EditProduct";
import Orders from "./Orders";
import Products from "./Products";
import Welcome from "./Welcome";


const Shop = (props) => {
  const { url } = useRouteMatch();

  const cart = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order);
  const products = useSelector(state=>state.product);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (!orders.saved) {
      dispatch(SaveOrders(orders.orderItems));
    }
  }, [orders, dispatch]);

  useEffect(() => {
    if (!cart.saved) {
      dispatch(SaveCart(cart.cartItems));
    }
  }, [cart, dispatch]);

  useEffect(()=>{
    if(!products.saved){
        dispatch(saveProducts(products.productItems));
    }
  },[products,dispatch]);

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
          <Redirect to={`${url}/welcome`} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Shop;
