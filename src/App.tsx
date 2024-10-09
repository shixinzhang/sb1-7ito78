import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import GameShowcase from './components/GameShowcase';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GameStudio</h1>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li><a href="#games" className="hover:text-gray-300">Games</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-in-the-style-of-cyberpunk-4161-large.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">Welcome to the Void</h2>
            <p className="text-xl md:text-2xl mb-8">Explore our atmospheric games</p>
            <a href="#games" className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Discover
              <ChevronDown size={20} className="ml-2" />
            </a>
          </div>
        </section>

        <GameShowcase />

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg max-w-3xl mx-auto text-center">
              We are a passionate team of game developers dedicated to creating immersive and atmospheric experiences. 
              Our games blend stunning visuals with compelling narratives, inviting players to explore mysterious worlds.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;