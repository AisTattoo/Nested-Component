import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./Pages/Login";
import RegisterPage from './Pages/Register';
import ErrorPage from './Pages/404';
import MakananPage from './Pages/Makanan';
import ProductPage from './Pages/Product';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element: <RegisterPage />,
  },
  {
    path:"/makanan",
    element: <MakananPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);