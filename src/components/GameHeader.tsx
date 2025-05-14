
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const GameHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-game-dark/95 backdrop-blur-sm border-b border-game-purple/20">
      <div className="container mx-auto py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2 text-game-purple">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
              >
                <path d="M7.97 16L5 19C4.67 19.3 4.23 19.5 3.75 19.5S2.83 19.3 2.5 19L1 17.5C0.7 17.17 0.5 16.73 0.5 16.25C0.5 15.77 0.7 15.33 1 15L4 12H7V9H4L1 6C0.7 5.67 0.5 5.23 0.5 4.75C0.5 4.28 0.7 3.83 1 3.5L2.5 2C2.83 1.7 3.27 1.5 3.75 1.5C4.23 1.5 4.67 1.7 5 2L7.97 5H16.03L19 2C19.33 1.7 19.77 1.5 20.25 1.5C20.73 1.5 21.17 1.7 21.5 2L23 3.5C23.3 3.83 23.5 4.28 23.5 4.75C23.5 5.23 23.3 5.67 23 6L20 9H17V12H20L23 15C23.3 15.33 23.5 15.77 23.5 16.25C23.5 16.72 23.3 17.17 23 17.5L21.5 19C21.17 19.3 20.73 19.5 20.25 19.5C19.77 19.5 19.33 19.3 19 19L16.03 16H7.97M7 12V9H8.5V12H7M11.5 12V9H13V12H11.5M16 12V9H17V12H16Z" />
              </svg>
            </div>
            <h1 className="font-montserrat font-bold text-xl text-white">GameKeys<span className="text-game-purple">.Store</span></h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-white hover:text-game-purple transition-colors">Главная</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-purple transition-colors">Каталог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-purple transition-colors">Скидки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-purple transition-colors">Поддержка</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Right Side - Search & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input 
                type="text" 
                placeholder="Поиск игр..." 
                className="w-[220px] bg-game-gray/50 border-game-gray text-white"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-300" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-game-purple text-white">
                  {cartCount}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search bar - Shown below header when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 relative">
            <Input 
              type="text" 
              placeholder="Поиск игр..." 
              className="w-full bg-game-gray/50 border-game-gray"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        )}
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="space-y-4">
              <li><a href="#" className="block text-white hover:text-game-purple transition-colors">Главная</a></li>
              <li><a href="#" className="block text-gray-400 hover:text-game-purple transition-colors">Каталог</a></li>
              <li><a href="#" className="block text-gray-400 hover:text-game-purple transition-colors">Скидки</a></li>
              <li><a href="#" className="block text-gray-400 hover:text-game-purple transition-colors">Поддержка</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default GameHeader;
