
import React, { useState } from 'react';

interface FilterItemProps {
  title: string;
  options: string[];
  isOpenDefault?: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, options, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-border-gray py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group"
      >
        <span className="font-bold uppercase tracking-widest text-sm">{title}</span>
        <svg 
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-4">
          <button className="text-sm text-gray-400 underline uppercase tracking-widest">Unselect all</button>
          <div className="space-y-3">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-black" />
                <span className="text-sm group-hover:text-black transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[300px] shrink-0 hidden lg:block pr-10">
      <label className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-6 cursor-pointer">
        <input type="checkbox" className="w-4 h-4 accent-black" />
        Customizable
      </label>

      <div className="flex flex-col">
        <FilterItem title="Ideal For" options={['Men', 'Women', 'Kids']} />
        <FilterItem title="Occasion" options={['Formal', 'Casual', 'Sport', 'Party']} />
        <FilterItem title="Work" options={['Handmade', 'Embroidery', 'Solid']} />
        <FilterItem title="Fabric" options={['Cotton', 'Linen', 'Silk', 'Wool']} />
        <FilterItem title="Segment" options={['Premium', 'Luxury', 'Budget']} />
        <FilterItem title="Suitable For" options={['Winter', 'Summer', 'All Season']} />
        <FilterItem title="Raw Materials" options={['Organic', 'Recycled', 'Natural']} />
        <FilterItem title="Pattern" options={['Check', 'Striped', 'Plain', 'Floral']} />
      </div>
    </aside>
  );
};

export default Sidebar;
