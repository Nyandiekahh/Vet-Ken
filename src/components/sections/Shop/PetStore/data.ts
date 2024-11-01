import { Category, MarketItem } from './types';

export const categories: Category[] = [
  { id: 'all', name: 'All Categories' },
  { 
    id: 'livestock', 
    name: 'Livestock',
    subcategories: [
      { id: 'dairy-cattle', name: 'Dairy Cattle' },
      { id: 'beef-cattle', name: 'Beef Cattle' },
      { id: 'goats', name: 'Goats' },
      { id: 'sheep', name: 'Sheep' }
    ]
  },
  { 
    id: 'poultry', 
    name: 'Poultry',
    subcategories: [
      { id: 'layers', name: 'Layers' },
      { id: 'broilers', name: 'Broilers' },
      { id: 'kienyeji', name: 'Kienyeji' }
    ]
  },
  { id: 'products', name: 'Animal Products' }
];

export const marketItems: MarketItem[] = [
  {
    id: 1,
    type: 'Poultry',
    category: 'poultry',
    subcategory: 'layers',
    title: 'Layer Chickens',
    price: 1500,
    description: 'Healthy layer chickens with excellent egg production rate',
    details: {
      age: '8 months',
      weight: '2 kg',
      breed: 'Rhode Island Red',
      gender: 'Female',
      quantity: 50,
      condition: 'Excellent',
      production: '1 egg/day',
      feedType: 'Commercial layer feed',
      vaccination: {
        isVaccinated: true,
        certificates: ['Newcastle', 'Gumboro', 'Fowl Pox'],
        lastVaccinationDate: '2024-01-15'
      }
    },
    vaccinated: true,
    negotiable: true,
    inStock: true,
    images: ['/images/layer-chickens.jpg'],
    contact: {
      name: 'John Doe',
      phone: '+254 123 456 789',
      email: 'john@example.com',
      location: 'Nairobi',
      county: 'Nairobi County',
      availability: '8:00 AM - 6:00 PM'
    },
    listedDate: '2024-02-15',
    status: 'available',
    tags: ['layers', 'rhode island red', 'vaccinated']
  },
  {
    id: 2,
    type: 'Livestock',
    category: 'livestock',
    subcategory: 'dairy-cattle',
    title: 'Friesian Dairy Cow',
    price: 120000,
    description: 'High-yielding dairy cow, currently producing 25L daily',
    details: {
      age: '5 years',
      weight: '600 kg',
      breed: 'Friesian',
      gender: 'Female',
      quantity: 1,
      condition: 'Excellent',
      production: '25L/day',
      feedType: 'Dairy meal and hay',
      vaccination: {
        isVaccinated: true,
        certificates: ['FMD', 'LSD', 'Anthrax'],
        lastVaccinationDate: '2024-01-10'
      }
    },
    vaccinated: true,
    negotiable: true,
    inStock: true,
    images: ['/images/friesian-cow.jpg'],
    contact: {
      name: 'Jane Smith',
      phone: '+254 987 654 321',
      email: 'jane@example.com',
      location: 'Nakuru',
      county: 'Nakuru County',
      availability: '7:00 AM - 7:00 PM'
    },
    listedDate: '2024-02-10',
    status: 'available',
    tags: ['dairy', 'friesian', 'high yield']
  }
];