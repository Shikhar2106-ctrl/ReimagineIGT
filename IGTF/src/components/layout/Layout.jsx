import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import SmoothScroll from '../common/SmoothScroll';
import ChatbotWidget from '../common/ChatbotWidget';

export default function Layout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#F5F5F5] text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-700">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-16">
          <Outlet />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </SmoothScroll>
  );
}
