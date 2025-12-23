
import React, { useState } from 'react';
import { Product } from '../types';
import { HeartIcon } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.id === 1 && (
          <div className="absolute top-4 left-0 bg-white px-3 py-1 font-bold text-xs uppercase tracking-widest">
            New Arrival
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-sm uppercase tracking-widest truncate flex-grow">
            {product.title}
          </h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="shrink-0 hover:scale-110 transition-transform"
            aria-label={isLiked ? "Unlike product" : "Like product"}
          >
            <HeartIcon filled={isLiked} />
          </button>
        </div>
        <p className="text-xs text-gray-500 line-clamp-1">
          <span className="underline cursor-pointer">Sign in</span> or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
