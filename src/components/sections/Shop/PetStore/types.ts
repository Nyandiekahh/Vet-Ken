export interface Contact {
    name: string;
    phone: string;
    email: string;
    location: string;
    county: string;
    availability: string;
  }
  
  export interface ProductDetails {
    age?: string;
    weight?: string;
    breed?: string;
    color?: string;
    gender?: 'Male' | 'Female';
    quantity: number;
    condition?: string;
    certification?: string[];
    production?: string;
    feedType?: string;
    vaccination?: {
      isVaccinated: boolean;
      certificates: string[];
      lastVaccinationDate?: string;
    };
    medication?: {
      current: string[];
      history: string[];
    };
  }
  
  export interface MarketItem {
    id: number;
    type: string;
    category: string;
    subcategory?: string;
    title: string;
    price: number;
    description: string;
    details: ProductDetails;
    vaccinated: boolean;
    negotiable: boolean;
    inStock: boolean;
    images: string[];
    contact: Contact;
    listedDate: string;
    expiryDate?: string;
    status: 'available' | 'pending' | 'sold';
    tags: string[];
  }
  
  export interface Category {
    id: string;
    name: string;
    subcategories?: {
      id: string;
      name: string;
    }[];
  }
  
  export type CategoryId = 
    | 'all' 
    | 'livestock' 
    | 'poultry' 
    | 'dairy' 
    | 'feed' 
    | 'equipment' 
    | 'products';
  
  export interface Filter {
    category: CategoryId;
    subcategory?: string;
    priceRange?: {
      min: number;
      max: number;
    };
    location?: string;
    condition?: string;
    availability?: boolean;
  }
  
  export interface SortOption {
    field: keyof MarketItem;
    direction: 'asc' | 'desc';
  }