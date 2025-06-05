import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, User, Search } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 ${
      isActive
        ? 'text-primary-500 font-medium'
        : 'text-neutral-700 hover:text-primary-500'
    } transition-colors duration-200`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-primary-500">MedEquip</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClasses}>
            Products
          </NavLink>
          <NavLink to="/donate" className={navLinkClasses}>
            Donate Blood
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            aria-label="Search"
            className="p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-200"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Wishlist"
            className="p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-200"
          >
            <Heart size={20} />
          </button>
          <button
            aria-label="Cart"
            className="p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-200"
          >
            <ShoppingCart size={20} />
          </button>
          <Link
            to="/account"
            className="p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-200"
          >
            <User size={20} />
          </Link>
          <Link to="/donate/register" className="btn-secondary">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-2">
            <NavLink
              to="/"
              className="px-3 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="px-3 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              Products
            </NavLink>
            <NavLink
              to="/donate"
              className="px-3 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              Donate Blood
            </NavLink>
            <NavLink
              to="/about"
              className="px-3 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="px-3 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              Contact
            </NavLink>
            <div className="pt-2 mt-2 border-t border-neutral-200 flex justify-between">
              <button className="p-3 text-neutral-700">
                <Search size={20} />
              </button>
              <button className="p-3 text-neutral-700">
                <Heart size={20} />
              </button>
              <button className="p-3 text-neutral-700">
                <ShoppingCart size={20} />
              </button>
              <Link to="/account" className="p-3 text-neutral-700">
                <User size={20} />
              </Link>
            </div>
            <Link
              to="/donate/register"
              className="btn-secondary w-full mt-2 text-center"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;