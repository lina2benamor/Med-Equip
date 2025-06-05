import React from 'react';
import { Heart, Plus } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart className="text-secondary-500" size="70%" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Plus className="text-primary-500" size="70%" strokeWidth={3} />
      </div>
    </div>
  );
};

export default Logo;