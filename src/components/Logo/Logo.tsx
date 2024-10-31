// components/Logo/Logo.tsx
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60">
      <g id="logo-container">
        <path 
          d="M40 10C20 10 10 30 10 40C10 50 20 55 30 55C40 55 50 45 50 35C50 25 45 20 40 10Z" 
          fill="#4a148c" 
          opacity="0.9"
        />
        
        <circle cx="25" cy="35" r="3" fill="white"/>
        <circle cx="35" cy="35" r="3" fill="white"/>
        <circle cx="30" cy="42" r="3" fill="white"/>
        <path 
          d="M23 28C23 31.866 26.134 35 30 35C33.866 35 37 31.866 37 28C37 24.134 33.866 21 30 21C26.134 21 23 24.134 23 28Z" 
          fill="white"
        />

        <text x="65" y="35" fontFamily="Arial" fontWeight="bold" fontSize="24" fill="#4a148c">
          VetCare
        </text>
        <text x="155" y="35" fontFamily="Arial" fontWeight="bold" fontSize="24" fill="#4a148c">
          Pro
        </text>
        
        <text x="65" y="48" fontFamily="Arial" fontSize="10" fill="#666">
          Expert Veterinary & Agro Care
        </text>

        <g transform="translate(190, 20)">
          <path 
            d="M0 8h16M8 0v16" 
            stroke="#4a148c" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;