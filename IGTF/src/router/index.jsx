import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const ClientsPage = lazy(() => import('../pages/ClientsPage'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className="min-h-[60vh] bg-[#F5F5F5]" />}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <SuspenseWrapper><About /></SuspenseWrapper> },
        { path: 'products', element: <SuspenseWrapper><ProductsPage /></SuspenseWrapper> },
        { path: 'products/:productId', element: <SuspenseWrapper><ProductDetailPage /></SuspenseWrapper> },
        { path: 'clients', element: <SuspenseWrapper><ClientsPage /></SuspenseWrapper> },
        { path: 'contact', element: <SuspenseWrapper><Contact /></SuspenseWrapper> },
        { path: '*', element: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
