// src/components/sections/Shop/SellLivestock/types.ts
export interface ListingFormData {
    itemType: string;
    category: string;
    title: string;
    quantity: number;
    price: number;
    age: string;
    breed: string;
    weight: string;
    description: string;
    location: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    images: FileList | null;
    vaccination: boolean;
    certification: boolean;
    negotiable: boolean;
  }