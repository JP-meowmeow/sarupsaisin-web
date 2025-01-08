import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "../src/pages/Login";
import AboutUs from "../src/pages/AboutUs";
import Test from "../src/pages/Test";
import Course from "../src/pages/Course";
import Register from "../src/pages/Register";
import App from "../src/App";
import Layout from "../src/layout/Layout";
import Home from "../src/pages/Home";
import Article from "../src/pages/Article";
import UserInfo from "../src/pages/UserInfo";
import PageNotFound from "../src/pages/PageNotFound";
import CreateArticle from "../src/pages/pages-inside/CreateArticle";
import useAuthStore from "../store/authStore";
import InsideArticle from "../src/pages/pages-inside/InsideArticle";
import InsideCourse from "../src/pages/pages-inside/InsideCourse";
import CreateCourse from "../src/pages/pages-inside/CreateCourse";
import EditArticle from "../src/pages/pages-inside/EditArticle";
import EditCourse from "../src/pages/pages-inside/EditCourse";
import Payment from "../src/pages/Payment";
import UserData from "../src/pages/UserData";
import ForgotPassword from "../src/pages/ForgetPassword";
import ResetPassword from "../src/pages/ResetPassword";

function AppRouter() {
  const { token,role } = useAuthStore();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutUs /> },
        // page for selling the book
        { path: "test", element: <Test /> },

        { path: "course", element: <Course /> },
        { path: "course/:id", element: <InsideCourse /> },

        {
          path: "course/create",
          element: role === "ADMIN" ? <CreateCourse /> : <Navigate to='/'/>,
        },
        
        {
          path: `course/edit/:id`,
          element: role === "ADMIN" ? <EditCourse /> : <Navigate to='/'/>,
        },

        { path: "login", element: token ? <Navigate to="/" /> : <Login /> },
        { path: "/forgot-password",
          element:token ? <Navigate to='/'/> : <ForgotPassword/> },
        { path: "/reset-password/:token",
           element: <ResetPassword/> },
        {
          path: "register",
          element: token ? <Navigate to="/" /> : <Register />,
        },
        
        { path: "article", element: <Article /> },
        { path: "article/:id", element: <InsideArticle /> },
        {
          path: "article/create",
          element: role === "ADMIN" ? <CreateArticle /> : <Navigate to='/'/>,
        },
        {
          path: `article/edit/:id`,
          element: role === "ADMIN" ? <EditArticle /> : <Navigate to='/'/>,
        },

        //dash board
        { path: "userinfo", element: token ? <UserInfo /> : <Navigate to='/'/> }, //dashboard-user
        {
          path: "admin/userdata",
          element: role === "ADMIN" ? <UserData /> : <Navigate to='/'/>,
        }, //dashboard-admin for check slip

        //payment page
        { path: "payment/:id", element: token ? <Payment /> : <Navigate to='/'/> },
        { path: "payment", element: <Navigate to='/'/> },
        
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  // const user = null //change when login,but not sure this app need or not
  // const finalRouter = user? userRouter : guestRouter
  return <RouterProvider router={router} />;
}

export default AppRouter;
