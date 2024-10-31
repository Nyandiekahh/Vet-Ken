// src/components/sections/Shop/types/shop.types.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
  }
  
  export interface Pet extends Product {
    breed: string;
    age: number;
    gender: 'male' | 'female';
    vaccinated: boolean;
    weight: number;
  }