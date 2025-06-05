import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Heart, Droplet, Clock, Users, ChevronDown } from 'lucide-react';
import CategoryCard from '../components/ui/CategoryCard';
import ProductCard from '../components/ui/ProductCard';
import Testimonial from '../components/ui/Testimonial';
import Button from '../components/ui/Button';
import { categories } from '../data/categories';
import { getNewProducts, getDiscountedProducts } from '../data/products';
import { getDonorTestimonials, getCustomerTestimonials } from '../data/testimonials';

const featuredCategories = categories.slice(0, 4);
const newProducts = getNewProducts();
const discountedProducts = getDiscountedProducts();
const donorTestimonials = getDonorTestimonials(2);
const customerTestimonials = getCustomerTestimonials(1);

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
              opacity: '0.2'
            }}
          ></div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Quality Medical Equipment & Life-Saving Donations
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your trusted source for premium healthcare equipment and blood donation services. Together, we can improve patient care and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary">
                Shop Equipment
              </Link>
              <Link to="/donate/register" className="btn-secondary">
                Donate Blood
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-900 to-transparent"></div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-grow mb-4 md:mb-0 md:mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for medical equipment..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="flex items-center cursor-pointer group">
                  <span className="text-neutral-700 mr-1">Categories</span>
                  <ChevronDown size={16} className="text-neutral-500 group-hover:text-primary-500 transition-colors duration-200" />
                </div>
              </div>
              <button className="btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our wide range of high-quality medical equipment and supplies, organized by category for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                icon={category.icon}
                link={`/products?category=${category.slug}`}
                color={category.color}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-outline">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
              <p className="text-neutral-600">
                The latest additions to our medical equipment inventory
              </p>
            </div>
            <Link
              to="/products?sort=newest"
              className="flex items-center text-primary-500 hover:text-primary-600 font-medium mt-4 md:mt-0"
            >
              <span>View all new arrivals</span>
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="section bg-secondary-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-secondary-100 text-secondary-600 font-medium text-sm mb-4">
                Blood Donation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Donation Makes a Difference
              </h2>
              <p className="text-neutral-700 mb-6">
                Every donation can save up to three lives. Our streamlined donation process makes it easy to contribute to this life-saving cause. Schedule your donation today.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-md mr-4">
                    <Droplet size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Safe and Hygienic</h3>
                    <p className="text-neutral-600">All our donation centers follow strict hygiene protocols and use sterile equipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-md mr-4">
                    <Clock size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quick Process</h3>
                    <p className="text-neutral-600">The donation process takes only about 10-15 minutes of your time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-md mr-4">
                    <Users size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Staff</h3>
                    <p className="text-neutral-600">Our trained professionals ensure a comfortable donation experience.</p>
                  </div>
                </div>
              </div>
              <Link to="/donate/register" className="btn-secondary">
                Register to Donate
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blood donation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 z-0">
                <Heart 
                  size={180} 
                  className="text-secondary-200 animate-pulse-slow" 
                  fill="rgba(230, 57, 70, 0.1)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
              <p className="text-neutral-600">
                Limited-time discounts on quality medical equipment
              </p>
            </div>
            <Link
              to="/products?discount=true"
              className="flex items-center text-primary-500 hover:text-primary-600 font-medium mt-4 md:mt-0"
            >
              <span>View all offers</span>
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Read testimonials from our customers and blood donors about their experience with MedEquip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...donorTestimonials, ...customerTestimonials].map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide quality healthcare equipment and save lives through blood donation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn-white">
              Shop Equipment
            </Link>
            <Link to="/donate/register" className="btn-secondary">
              Donate Blood
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;