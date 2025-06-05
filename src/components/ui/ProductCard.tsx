import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div className={`card group ${className}`}>
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            aria-label="Add to wishlist"
            className="p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors duration-200"
          >
            <Heart size={18} className="text-neutral-600" />
          </button>
          <button
            aria-label="Add to cart"
            className="p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors duration-200"
          >
            <ShoppingCart size={18} className="text-neutral-600" />
          </button>
        </div>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/products/${product.id}`}>
              <h3 className="text-lg font-semibold hover:text-primary-500 transition-colors duration-200">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-neutral-600 mt-1">{product.category}</p>
          </div>
          <div className="text-right">
            {product.discount > 0 ? (
              <>
                <span className="text-secondary-500 font-semibold">${product.discountedPrice.toFixed(2)}</span>
                <span className="text-neutral-500 text-sm line-through ml-2">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-neutral-900 font-semibold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? 'text-warning-500' : 'text-neutral-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-neutral-600 ml-1">({product.reviewCount})</span>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full btn-primary py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;