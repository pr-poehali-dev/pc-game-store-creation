
import { Button } from '@/components/ui/button';

const GamePromo = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1920&auto=format&fit=crop)' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-game-dark via-game-dark/80 to-transparent"></div>
          
          <div className="relative z-10 py-10 px-6 md:py-16 md:px-10 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Распродажа ключей на премиум игры
              </h2>
              
              <p className="text-gray-300 mb-6 max-w-2xl">
                Скидки до 70% на популярные AAA-тайтлы. Успейте приобрести любимые игры по выгодной цене. 
                Предложение ограничено по времени!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-game-purple hover:bg-game-purple/90 animate-glow">
                  Смотреть все предложения
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                  Подробнее
                </Button>
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center w-32">
                <span className="text-3xl font-bold text-white">14</span>
                <span className="text-xs text-gray-400">Дней</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center w-32">
                <span className="text-3xl font-bold text-white">08</span>
                <span className="text-xs text-gray-400">Часов</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center w-32">
                <span className="text-3xl font-bold text-white">32</span>
                <span className="text-xs text-gray-400">Минут</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePromo;
