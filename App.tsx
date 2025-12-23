
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { Product, SortOption } from './types';
import { SORT_OPTIONS } from './constants';
import { fetchProducts } from './services/api';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('RECOMMENDED');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case 'PRICE_LOW_HIGH': return list.sort((a, b) => a.price - b.price);
      case 'PRICE_HIGH_LOW': return list.sort((a, b) => b.price - a.price);
      case 'NEWEST_FIRST': return list.reverse();
      case 'POPULAR': return list.sort((a, b) => b.rating.count - a.rating.count);
      default: return list;
    }
  }, [products, sortBy]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow max-w-[1440px] mx-auto px-4 md:px-10 py-10 w-full">
        {/* Breadcrumb (simplified) */}
        <div className="flex gap-2 text-xs text-gray-400 uppercase tracking-widest mb-12">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <span>|</span>
          <span className="text-black font-bold">Shop</span>
        </div>

        {/* Page Title & Intro */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] mb-6">Discover our products</h1>
          <p className="text-gray-500 leading-relaxed text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus diam habitant sit vulputate 
            eleifend integer non. Pellentesque vel accumsan libero viverra justo.
          </p>
        </section>

        {/* Controls Bar */}
        <div className="flex items-center justify-between border-y border-border-gray py-6 mb-10 sticky top-[132px] md:top-[160px] bg-white z-40">
          <div className="flex items-center gap-8">
            <span className="hidden md:inline font-bold uppercase tracking-widest text-sm">
              {products.length} Items
            </span>
            <button 
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="flex items-center gap-2 group"
            >
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`transition-transform duration-300 ${!isSidebarVisible ? 'rotate-180' : ''}`}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="underline uppercase tracking-widest text-sm font-bold group-hover:text-gray-500">
                {isSidebarVisible ? 'Hide Filter' : 'Show Filter'}
              </span>
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm"
            >
              <span>{SORT_OPTIONS.find(o => o.value === sortBy)?.label}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            
            {isSortDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-border-gray shadow-xl z-50">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value as SortOption);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full text-right px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors ${sortBy === option.value ? 'bg-gray-50' : ''}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex gap-10">
          {isSidebarVisible && <Sidebar />}
          
          <div className="flex-grow">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-gray-100 rounded mb-4" />
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-100 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid gap-x-6 gap-y-12 transition-all duration-300 ${
                isSidebarVisible 
                  ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
