
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border-b border-white/20 pb-12">
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">Be the first to know</h3>
            <p className="text-sm text-gray-400">Sign up for updates from mettā muse.</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="bg-white text-black px-4 py-3 flex-grow outline-none"
              />
              <button className="px-8 py-3 border border-white text-gray-400 uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">Contact Us</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">Currency</h3>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black text-[10px] font-bold">🇺🇸</span>
                </div>
                <span className="font-bold">USD</span>
              </div>
              <p className="text-[10px] text-gray-400">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">mettā muse</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EU Compliance Docs</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment & Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">mettā muse ACCEPTS</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white px-2 py-1 rounded text-black font-bold text-xs">G Pay</div>
              <div className="bg-white px-2 py-1 rounded text-black font-bold text-xs">VISA</div>
              <div className="bg-white px-2 py-1 rounded text-black font-bold text-xs">Mastercard</div>
              <div className="bg-white px-2 py-1 rounded text-black font-bold text-xs">AMEX</div>
              <div className="bg-white px-2 py-1 rounded text-black font-bold text-xs">PayPal</div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/20 text-center text-xs text-gray-500">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
