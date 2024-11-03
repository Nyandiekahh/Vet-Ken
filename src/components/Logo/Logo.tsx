import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60">
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00796B', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#004D40', stopOpacity: 1 }} />
        </linearGradient>
        
        <clipPath id="waveMask">
          <path d="M10 10 H50 V50 H10 Z" />
        </clipPath>
      </defs>
      
      <g id="logo-container">
        {/* Main circular design element */}
        <circle 
          cx="30" 
          cy="30" 
          r="20" 
          fill="#E0F2F1" 
          stroke="#004D40" 
          strokeWidth="1.5"
        />
        
        {/* Overlapping leaf shapes */}
        <path 
          d="M20 20
             C 25 15, 35 15, 40 20
             C 45 25, 45 35, 40 40
             C 35 45, 25 45, 20 40
             C 15 35, 15 25, 20 20"
          fill="url(#leafGradient)"
          opacity="0.9"
        />
        
        <path 
          d="M25 25
             C 28 22, 32 22, 35 25
             C 38 28, 38 32, 35 35
             C 32 38, 28 38, 25 35
             C 22 32, 22 28, 25 25"
          fill="#B2DFDB"
          opacity="0.8"
        />

        {/* Dynamic wave patterns */}
        <g clipPath="url(#waveMask)">
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M5 ${20 + i * 5}
                  C 15 ${15 + i * 5}, 25 ${25 + i * 5}, 35 ${20 + i * 5}
                  S 45 ${15 + i * 5}, 55 ${20 + i * 5}`}
              fill="none"
              stroke="#004D40"
              strokeWidth="0.5"
              opacity={0.3}
            />
          ))}
        </g>

        {/* Minimalist cross symbol */}
        <path
          d="M28 28h4M30 26v4"
          stroke="#004D40"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Company Name with custom styling */}
        <text 
          x="65" 
          y="35" 
          fontFamily="Helvetica Neue" 
          fontSize="28"
          letterSpacing="2"
        >
          <tspan fill="#00796B" fontWeight="300">Vet</tspan>
          <tspan fill="#004D40" fontWeight="500">gro</tspan>
        </text>
        
        {/* Modern tagline */}
        <text 
          x="65" 
          y="48" 
          fontFamily="Helvetica Neue" 
          fontSize="11" 
          letterSpacing="1.5"
          fill="#00796B"
        >
          ADVANCING SCIENCE
        </text>

        {/* Abstract geometric accent */}
        <g transform="translate(180, 20)">
          {[...Array(3)].map((_, i) => (
            <rect
              key={i}
              x={i * 5}
              y={i * 5}
              width="10"
              height="10"
              fill="none"
              stroke="#00796B"
              strokeWidth="0.5"
              opacity={0.8 - i * 0.2}
            />
          ))}
        </g>
      </g>
    </svg>
  );
};

export default Logo;