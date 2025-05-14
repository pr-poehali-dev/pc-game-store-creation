
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'Все игры' },
  { id: 'action', name: 'Экшен' },
  { id: 'adventure', name: 'Приключения' },
  { id: 'rpg', name: 'RPG' },
  { id: 'strategy', name: 'Стратегии' },
  { id: 'shooter', name: 'Шутеры' },
  { id: 'simulation', name: 'Симуляторы' },
  { id: 'sports', name: 'Спортивные' },
];

const GameCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  return (
    <div className="py-6 mb-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-white mb-4 px-4 lg:px-0">Категории</h2>
        
        <div className="flex overflow-x-auto pb-4 px-4 lg:px-0 hide-scrollbar">
          <div className="flex space-x-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-item flex-shrink-0 px-4 py-2 rounded-full border ${
                  activeCategory === category.id 
                    ? 'active text-game-purple border-game-purple'
                    : 'text-gray-300 border-game-gray/50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
