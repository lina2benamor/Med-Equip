import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp, Search } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { categories } from '../data/categories';
import { products, getProductsByCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  const discountParam = searchParams.get('discount') === 'true';
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParam || '');

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.discountedPrice >= priceRange[0] && product.discountedPrice <= priceRange[1]
    );
    
    // Filter by discount
    if (discountParam) {
      result = result.filter(product => product.discount > 0);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    } else if (sortOption === 'discount') {
      result.sort((a, b) => b.discount - a.discount);
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortOption, searchQuery, discountParam]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="pt-16 bg-neutral-50">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">Medical Equipment</h1>
          <p className="mt-2 text-white/80">
            Browse our comprehensive selection of high-quality medical equipment and supplies
          </p>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden sticky top-16 z-20 bg-white shadow-md">
        <div className="container-custom py-3">
          <button
            onClick={toggleMobileFilter}
            className="w-full flex items-center justify-between p-3 bg-primary-50 rounded-md"
          >
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-primary-600" />
              <span className="font-medium">Filters</span>
            </div>
            {isMobileFilterOpen ? (
              <ChevronUp size={18} className="text-primary-600" />
            ) : (
              <ChevronDown size={18} className="text-primary-600" />
            )}
          </button>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`w-full lg:w-1/4 space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Search */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <button
                    className={`w-full text-left px-2 py-1 rounded-md ${
                      selectedCategory === null
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'hover:bg-neutral-100'
                    }`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    All Categories
                  </button>
                </div>
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <button
                      className={`w-full text-left px-2 py-1 rounded-md ${
                        selectedCategory === category.name
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'hover:bg-neutral-100'
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full px-2 py-1 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <span className="flex items-center">-</span>
                  <input
                    type="number"
                    min={priceRange[0]}
                    max="3000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full px-2 py-1 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Special Offers</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discounted"
                    checked={discountParam}
                    onChange={() => {
                      // This would typically update the URL param
                      window.history.pushState(
                        {},
                        '',
                        `?discount=${!discountParam}`
                      );
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="discounted" className="ml-2 text-neutral-700">
                    On Sale
                  </label>
                </div>
              </div>
            </div>

            {/* Apply Filters Button (Mobile) */}
            <div className="lg:hidden">
              <Button 
                variant="primary"
                fullWidth
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-neutral-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-neutral-600">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-neutral-600 mb-4">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <Button 
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 3000]);
                    setSearchQuery('');
                    setSortOption('featured');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;