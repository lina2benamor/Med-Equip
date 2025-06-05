import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  link,
  color,
}) => {
  return (
    <Link to={link} className="block group">
      <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-t-4 ${color}`}>
        <div className="flex items-start">
          <div className="mr-4">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-neutral-600 text-sm mb-4">{description}</p>
            <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
              <span className="text-sm font-medium">View Products</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;