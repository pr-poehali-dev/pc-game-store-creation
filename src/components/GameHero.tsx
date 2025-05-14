
import { Button } from '@/components/ui/button';

const GameHero = () => {
  return (
    <section className="hero-gradient py-20 px-4 md:py-32 relative">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Лицензионные ключи <span className="text-game-purple">для PC игр</span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Моментальная доставка. Официальные ключи. Лучшие цены.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" className="bg-game-purple hover:bg-game-purple/90 text-white">
            Популярные игры
          </Button>
          <Button size="lg" variant="outline" className="border-game-purple text-white hover:bg-game-purple/10">
            Новинки
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-game-purple/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-game-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Мгновенная доставка</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-game-purple/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-game-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span>Гарантия качества</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-game-purple/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-game-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span>Безопасная оплата</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-game-purple/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-game-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span>Техподдержка 24/7</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-game-dark to-transparent"></div>
    </section>
  );
};

export default GameHero;
