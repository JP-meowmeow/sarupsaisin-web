import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/pages/Login";
import AboutUs from "../src/pages/AboutUs";
import Test from "../src/pages/Test";
import Course from "../src/pages/Course";
import Register from "../src/pages/Register";
import App from "../src/App";
import Layout from "../src/layout/layout";
import Home from "../src/pages/Home";
import Article from "../src/pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <AboutUs /> },
      { path: "test", element: <Test /> },
      { path: "course", element: <Course /> },
      { path: "login", element: <Login /> },
      { path: "article", element: <Article/> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
