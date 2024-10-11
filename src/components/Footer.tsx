import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cinematic Critique</h3>
            <p className="text-sm">Your go-to source for in-depth movie and TV series reviews.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-300 transition">Home</Link></li>
              <li><Link to="/reviews" className="hover:text-primary-300 transition">Reviews</Link></li>
              <li><Link to="/about" className="hover:text-primary-300 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-300 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/movies" className="hover:text-primary-300 transition">Movies</Link></li>
              <li><Link to="/category/tv-series" className="hover:text-primary-300 transition">TV Series</Link></li>
              <li><Link to="/category/documentaries" className="hover:text-primary-300 transition">Documentaries</Link></li>
              <li><Link to="/category/indie-films" className="hover:text-primary-300 transition">Indie Films</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-300 transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary-300 transition"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary-300 transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary-300 transition"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 Cinematic Critique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;