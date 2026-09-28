import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const SolutionsPage = lazy(() => import('../pages/SolutionsPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const CaseStudiesPage = lazy(() => import('../pages/CaseStudiesPage'));
const StoryDetailPage = lazy(() => import('../pages/StoryDetailPage'));
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
        { path: 'solutions', element: <SuspenseWrapper><SolutionsPage /></SuspenseWrapper> },
        { path: 'solutions/:solutionId', element: <SuspenseWrapper><SolutionsPage /></SuspenseWrapper> },
        { path: 'products', element: <SuspenseWrapper><ProductsPage /></SuspenseWrapper> },
        { path: 'products/:productId', element: <SuspenseWrapper><ProductDetailPage /></SuspenseWrapper> },
        { path: 'case-studies', element: <SuspenseWrapper><CaseStudiesPage /></SuspenseWrapper> },
        { path: 'case-studies/:caseStudyId', element: <SuspenseWrapper><CaseStudiesPage /></SuspenseWrapper> },
        { path: 'stories/:storySlug', element: <SuspenseWrapper><StoryDetailPage /></SuspenseWrapper> },
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
