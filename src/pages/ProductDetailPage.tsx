import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, RotateCcw, ShieldCheck, Minus, Plus, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById, products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="pt-24 pb-16 container-custom">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="pt-16 bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-neutral-500 hover:text-primary-500">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2 text-neutral-400" />
            <Link to="/products" className="text-neutral-500 hover:text-primary-500">
              Products
            </Link>
            <ChevronRight size={14} className="mx-2 text-neutral-400" />
            <Link to={`/products?category=${product.category}`} className="text-neutral-500 hover:text-primary-500">
              {product.category}
            </Link>
            <ChevronRight size={14} className="mx-2 text-neutral-400" />
            <span className="text-neutral-700 font-medium truncate">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container-custom py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="mb-4 md:mb-0">
              <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-warning-500 fill-current'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600 text-sm">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-3xl font-bold text-neutral-900 mr-3">
                        ${product.discountedPrice.toFixed(2)}
                      </span>
                      <span className="text-xl text-neutral-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="ml-3 px-2 py-1 bg-secondary-500 text-white text-sm font-semibold rounded">
                        {product.discount}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-neutral-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <span className={`text-sm font-medium ${product.stock > 0 ? 'text-success-500' : 'text-error-500'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                  {product.stock > 0 && product.stock < 10 && (
                    <span className="ml-2 text-sm text-error-500">
                      Only {product.stock} left
                    </span>
                  )}
                </div>
              </div>

              <p className="text-neutral-700 mb-6">{product.description}</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-neutral-700 font-medium mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="p-2 border border-neutral-300 rounded-l-md bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > 0 && val <= product.stock) {
                        setQuantity(val);
                      }
                    }}
                    min="1"
                    max={product.stock}
                    className="w-16 border-y border-neutral-300 py-2 text-center focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="p-2 border border-neutral-300 rounded-r-md bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  variant="primary"
                  className="flex-grow"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="sm:w-auto">
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Product Meta */}
              <div className="border-t border-neutral-200 pt-4 space-y-2 text-sm">
                <div className="flex">
                  <span className="text-neutral-600 w-24">SKU:</span>
                  <span className="text-neutral-800">{product.sku}</span>
                </div>
                <div className="flex">
                  <span className="text-neutral-600 w-24">Category:</span>
                  <Link
                    to={`/products?category=${product.category}`}
                    className="text-primary-500 hover:text-primary-600"
                  >
                    {product.category}
                  </Link>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Truck size={20} className="text-primary-500 mr-2" />
                  <span className="text-sm">Free shipping over $100</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw size={20} className="text-primary-500 mr-2" />
                  <span className="text-sm">30-day returns</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck size={20} className="text-primary-500 mr-2" />
                  <span className="text-sm">2-year warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-neutral-200">
            <div className="flex border-b border-neutral-200">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'description'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'specifications'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-neutral-700 mb-4">{product.description}</p>
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="border-b border-neutral-200">
                          <th className="py-3 pr-4 font-medium text-neutral-700 w-1/3">
                            {key}
                          </th>
                          <td className="py-3 text-neutral-700">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="text-4xl font-bold text-neutral-900">
                        {product.rating.toFixed(1)}
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-warning-500 fill-current'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-neutral-600 mt-1">
                        Based on {product.reviewCount} reviews
                      </div>
                    </div>
                    <div className="flex-grow">
                      {/* Placeholder for review distribution bars */}
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center">
                            <span className="text-sm text-neutral-600 w-10">{stars} star</span>
                            <div className="flex-grow h-2 mx-2 bg-neutral-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-warning-500"
                                style={{
                                  width: `${
                                    stars === Math.round(product.rating)
                                      ? '70%'
                                      : Math.max(10, 100 - Math.abs(stars - product.rating) * 25) + '%'
                                  }`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-neutral-600 w-10 text-right">
                              {stars === Math.round(product.rating)
                                ? '70%'
                                : Math.max(10, 100 - Math.abs(stars - product.rating) * 25) + '%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Write a Review</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link
                to={`/products?category=${product.category}`}
                className="text-primary-500 hover:text-primary-600 flex items-center font-medium"
              >
                View All
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="card">
                  <Link to={`/products/${product.id}`} className="block relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                  </Link>
                  <div className="p-4">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold hover:text-primary-500 transition-colors duration-200">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-warning-500 fill-current'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-neutral-600 ml-1">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <div className="mt-2">
                      {product.discount > 0 ? (
                        <div className="flex items-center">
                          <span className="text-secondary-500 font-semibold">
                            ${product.discountedPrice.toFixed(2)}
                          </span>
                          <span className="text-neutral-500 text-sm line-through ml-2">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-neutral-900 font-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;