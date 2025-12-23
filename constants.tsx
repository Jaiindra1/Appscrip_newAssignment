
import React from 'react';

export const SORT_OPTIONS = [
  { value: 'RECOMMENDED', label: 'RECOMMENDED' },
  { value: 'NEWEST_FIRST', label: 'NEWEST FIRST' },
  { value: 'POPULAR', label: 'POPULAR' },
  { value: 'PRICE_HIGH_LOW', label: 'PRICE: HIGH TO LOW' },
  { value: 'PRICE_LOW_HIGH', label: 'PRICE: LOW TO HIGH' },
];

export const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="black"/>
    <path d="M10 10L26 26M10 26L26 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "red" : "none"} stroke={filled ? "red" : "currentColor"} strokeWidth="1.5">
    <path d="M12.1 21L10.7 19.7C5.6 15.1 2.3 12.1 2.3 8.5C2.3 5.5 4.6 3.2 7.5 3.2C9.1 3.2 10.7 4 11.7 5.1C12.7 4 14.3 3.2 15.9 3.2C18.8 3.2 21.1 5.5 21.1 8.5C21.1 12.1 17.8 15.1 12.7 19.7L12.1 21Z" />
  </svg>
);
