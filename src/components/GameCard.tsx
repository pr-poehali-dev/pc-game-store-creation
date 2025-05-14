
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  platform: string;
  genre: string;
}

const GameCard = ({ id, title, image, price, oldPrice, discount, platform, genre }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="game-card bg-game-gray/40 rounded-lg overflow-hidden border border-game-gray/50 hover:border-game-purple/50 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Game Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110" 
        />
        
        {/* Discount Badge */}
        {discount && (
          <Badge className="absolute top-3 right-3 bg-game-purple text-white font-medium">
            -{discount}%
          </Badge>
        )}
        
        {/* Platform Badge */}
        <Badge className="absolute top-3 left-3 bg-game-dark/80 text-white border border-game-gray/50">
          {platform}
        </Badge>
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-game-dark/90 via-game-dark/40 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        {/* Quick Actions on Hover */}
        <div className={`absolute bottom-4 left-0 right-0 px-4 transition-transform duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Button 
            className="w-full bg-game-purple hover:bg-game-purple/90 text-white font-medium"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>
      
      {/* Game Information */}
      <div className="p-4">
        <h3 className="font-montserrat font-semibold text-white line-clamp-1 mb-1">
          {title}
        </h3>
        
        <div className="text-xs text-gray-400 mb-3">
          {genre}
        </div>
        
        <div className="flex items-baseline">
          {oldPrice && (
            <span className="text-gray-400 line-through mr-2">
              {oldPrice} ₽
            </span>
          )}
          <span className="text-white font-bold text-lg">
            {price} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
