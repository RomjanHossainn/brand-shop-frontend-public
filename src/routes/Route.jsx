import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProductDisplay from "../pages/AllProductDisplay/AllProductDisplay";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
    ],
  },
]);


export default router;