import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-neutral-50">
      <div className="container-custom max-w-3xl text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <span className="text-9xl font-bold text-primary-300">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-neutral-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary flex items-center justify-center">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
            <Link to="/products" className="btn-outline flex items-center justify-center">
              <Search size={18} className="mr-2" />
              Browse Products
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-white flex items-center justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;