
import React from 'react';
import { LogoIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border-gray sticky top-0 bg-white z-50">
      {/* Top Bar Banner */}
      <div className="bg-black text-white text-[10px] py-2 flex justify-center gap-6 overflow-hidden uppercase tracking-widest whitespace-nowrap">
        <span>Lorem ipsum dolor</span>
        <span className="hidden sm:inline">Lorem ipsum dolor</span>
        <span className="hidden md:inline">Lorem ipsum dolor</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6H20M4 12H20M4 18H20" />
              </svg>
            </button>
            <LogoIcon />
          </div>

          <div className="text-2xl md:text-4xl font-black tracking-widest uppercase">LOGO</div>

          <div className="flex items-center gap-3 md:gap-6">
            <button aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button aria-label="Favorites">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0z" />
              </svg>
            </button>
            <button aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-3h7a2 2 0 0 0 2-1.72l1.24-7.28a1 1 0 0 0-1-1.17H5.27L4.21 4.39A1 1 0 0 0 3.22 3.5H2" />
              </svg>
            </button>
            <button className="hidden sm:block" aria-label="User Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-1 font-bold">
              <span>ENG</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex justify-center gap-10 font-bold uppercase tracking-widest text-sm">
          <a href="#" className="hover:text-gray-500">Shop</a>
          <a href="#" className="hover:text-gray-500">Skills</a>
          <a href="#" className="hover:text-gray-500">Stories</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
