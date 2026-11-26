import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-content-primary selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};
