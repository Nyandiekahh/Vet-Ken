import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Main spinning circle */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 rounded-full animate-spin-fast border-t-transparent"></div>
        </div>
        {/* Pulsing logo/text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-primary-600 font-bold text-xl animate-pulse">VET</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;