import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ClientsPage from '../pages/ClientsPage';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'products/:productId', element: <ProductDetailPage /> },
        { path: 'clients', element: <ClientsPage /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
