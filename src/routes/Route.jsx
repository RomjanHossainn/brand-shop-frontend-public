import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProductDisplay from "../pages/AllProductDisplay/AllProductDisplay";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/products/:name",
        element: <AllProductDisplay></AllProductDisplay>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`),
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/login',
        element : <Login></Login>
      }
    ],
  },
]);


export default router;