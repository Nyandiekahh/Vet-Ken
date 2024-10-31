// src/components/sections/Shop/PetStore/PetStore.tsx
import React, { useState } from 'react';
import { Pet } from '../types/shop.types';

const PetStore: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const species = ['All', 'Dogs', 'Cats', 'Birds', 'Other'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Available Pets</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {species.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedSpecies(type.toLowerCase())}
              className={`px-4 py-2 rounded-full ${
                selectedSpecies === type.toLowerCase()
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pets grid will go here */}
      </div>
    </div>
  );
};

export default PetStore;