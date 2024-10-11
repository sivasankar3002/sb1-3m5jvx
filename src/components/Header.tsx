import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Film size={32} />
          <span className="text-2xl font-serif font-bold">Cinematic Critique</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary-200 transition">Home</Link>
          <Link to="/reviews" className="hover:text-primary-200 transition">Reviews</Link>
          <Link to="/about" className="hover:text-primary-200 transition">About</Link>
          <Link to="/contact" className="hover:text-primary-200 transition">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-primary-200 transition">
            <Search size={24} />
          </button>
          <button
            className="md:hidden hover:text-primary-200 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-700 py-4">
          <nav className="flex flex-col space-y-2 px-4">
            <Link to="/" className="hover:text-primary-200 transition">Home</Link>
            <Link to="/reviews" className="hover:text-primary-200 transition">Reviews</Link>
            <Link to="/about" className="hover:text-primary-200 transition">About</Link>
            <Link to="/contact" className="hover:text-primary-200 transition">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;