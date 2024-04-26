import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import Root from "../Root/Root";
import Register from "./../../pages/RegisterPage/Register";
import Login from "./../../pages/LoginPage/LoginPage";
import AddCraftPage from "../../pages/AddCraftPage/AddCraftPage";
import MyCraftPage from "../../pages/MyCraftPage/MyCraftPage";
import AllCraftsPage from "../../pages/AllCraftsPage/AllCraftsPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-crafts",
        element: <AllCraftsPage />,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraftPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-craft",
        element: (
          <PrivateRoute>
            <MyCraftPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routers;
