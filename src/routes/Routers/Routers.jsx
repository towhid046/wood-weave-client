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
import CraftDetailsPage from "../../pages/CraftDetailsPage/CraftDetailsPage";
import UpdateCraftPage from "../../pages/UpdateCraftPage/UpdateCraftPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://assignment-10-server-side-liart.vercel.app/crafts"),
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
        loader: () => fetch("https://assignment-10-server-side-liart.vercel.app/crafts"),
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
        path: "/craft-details/:id",
        element: (
          <PrivateRoute>
            <CraftDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-side-liart.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/my-craft/:email",
        element: (
          <PrivateRoute>
            <MyCraftPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-side-liart.vercel.app/user-crafts/${params.email}`),
      },
      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraftPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-side-liart.vercel.app/crafts/${params.id}`),
      },
    ],
  },
]);

export default routers;
