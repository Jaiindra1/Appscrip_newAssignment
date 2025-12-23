
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type SortOption = 'RECOMMENDED' | 'NEWEST_FIRST' | 'POPULAR' | 'PRICE_HIGH_LOW' | 'PRICE_LOW_HIGH';

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
}
