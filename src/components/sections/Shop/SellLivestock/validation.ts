// src/components/sections/Shop/SellLivestock/validation.ts
import { ListingFormData } from './types';

export interface ValidationErrors {
  [key: string]: string;
}

export const validateForm = (formData: ListingFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  if (!formData.title?.trim()) {
    errors.title = 'Title is required';
  }
  
  if (formData.price <= 0) {
    errors.price = 'Price must be greater than 0';
  }
  
  if (!formData.description?.trim()) {
    errors.description = 'Description is required';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.contactEmail)) {
    errors.contactEmail = 'Invalid email address';
  }
  
  const phoneRegex = /^[0-9+\-\s()]{10,}$/;
  if (!phoneRegex.test(formData.contactPhone)) {
    errors.contactPhone = 'Invalid phone number';
  }
  
  return errors;
};
