import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProductDisplay from "../pages/AllProductDisplay/AllProductDisplay";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";
import Update from "../pages/Update/Update";
import AddProductPrivet from "../AddProductPrivet/AddProductPrivet";
import UpdatePrivet from "../pages/Update/UpdatePrivet";
import MyCart from "../pages/MyCart/MyCart";
import PrivetMyCart from "../pages/MyCart/PrivetMyCart";
import ProductDetails from "../pages/AllProductDisplay/ProductDetails";
import ErorrPage from "../ErorrPage/ErorrPage";
import DetailsPrivet from "../pages/AllProductDisplay/DetailsPrivet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErorrPage></ErorrPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/category.json"),
      },
      {
        path: "/products/:name",
        element: <AllProductDisplay></AllProductDisplay>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: (
          <AddProductPrivet>
            <AddProduct></AddProduct>
          </AddProductPrivet>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <UpdatePrivet>
            <Update></Update>
          </UpdatePrivet>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivetMyCart>
            <MyCart></MyCart>
          </PrivetMyCart>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <DetailsPrivet>
            <ProductDetails></ProductDetails>
          </DetailsPrivet>
        ),
      },
    ],
  },
]);


export default router;