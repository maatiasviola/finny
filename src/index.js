import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./index.css";
import Home from "./pages/Home/Home";
import Lesson from "./pages/Lesson/Lesson";
import Clasification from "./pages/Clasification/Clasification";

import Profile from "./pages/Profile/Profile";
import Cookies from "universal-cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/lesson",
    element: <Lesson />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path:"/clasification",
    element:<Clasification/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
