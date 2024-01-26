import React from "react";

import HomeLayout from "./pages/HomeLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import All from "./components/All.jsx";
import Grill from "./components/Grill.jsx";
import SeaFood from "./components/SeaFood.jsx";
import Pasta from "./components/Pasta.jsx";
import Fish from "./components/Fish.jsx";
import Thaifood from "./components/thaifood.jsx";
import Pizza from "./components/Pizza.jsx";
import CartProvider from "./CartContaxt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <All /> },
      {
        path: "grill",
        element: <Grill />,
      },

      {
        path: "Sea-Food",
        element: <SeaFood />,
      },
      {
        path: "pasta",
        element: <Pasta />,
      },
      {
        path: "fish",
        element: <Fish />,
      },
      {
        path: "thaifood",
        element: <Thaifood />,
      },
      {
        path: "pizza",
        element: <Pizza />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
