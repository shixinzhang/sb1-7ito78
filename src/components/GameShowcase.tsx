import React from 'react';

const games = [
  {
    title: "Limbo",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A puzzle-platform adventure in a dark and dangerous world."
  },
  {
    title: "Inside",
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A haunting journey through a dystopian landscape."
  },
  {
    title: "Somnia",
    image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Explore the depths of your subconscious in this surreal adventure."
  }
];

const GameShowcase: React.FC = () => {
  return (
    <section id="games" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.description}</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;