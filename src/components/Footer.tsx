import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">GameStudio</h3>
            <p className="text-gray-400">Creating atmospheric experiences</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">info@gamestudio.com</p>
            <p className="text-gray-400">+1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 GameStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;