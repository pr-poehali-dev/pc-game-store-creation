
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const GameFooter = () => {
  return (
    <footer className="bg-game-dark border-t border-game-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2 text-game-purple">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="currentColor"
                >
                  <path d="M7.97 16L5 19C4.67 19.3 4.23 19.5 3.75 19.5S2.83 19.3 2.5 19L1 17.5C0.7 17.17 0.5 16.73 0.5 16.25C0.5 15.77 0.7 15.33 1 15L4 12H7V9H4L1 6C0.7 5.67 0.5 5.23 0.5 4.75C0.5 4.28 0.7 3.83 1 3.5L2.5 2C2.83 1.7 3.27 1.5 3.75 1.5C4.23 1.5 4.67 1.7 5 2L7.97 5H16.03L19 2C19.33 1.7 19.77 1.5 20.25 1.5C20.73 1.5 21.17 1.7 21.5 2L23 3.5C23.3 3.83 23.5 4.28 23.5 4.75C23.5 5.23 23.3 5.67 23 6L20 9H17V12H20L23 15C23.3 15.33 23.5 15.77 23.5 16.25C23.5 16.72 23.3 17.17 23 17.5L21.5 19C21.17 19.3 20.73 19.5 20.25 19.5C19.77 19.5 19.33 19.3 19 19L16.03 16H7.97M7 12V9H8.5V12H7M11.5 12V9H13V12H11.5M16 12V9H17V12H16Z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-lg text-white">GameKeys<span className="text-game-purple">.Store</span></h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Ваш надежный магазин для покупки лицензионных ключей для игр на PC по лучшим ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-game-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-game-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-game-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-game-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Главная</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Каталог игр</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Акции и скидки</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Контакты</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Help */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">ЧаВо</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Как активировать ключ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Возврат средств</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-game-purple text-sm">Условия использования</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-400 text-sm mb-4">
              Подпишитесь на наши новости и получайте информацию о скидках, акциях и новинках.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-game-gray/50 border-game-gray text-white rounded-r-none"
              />
              <Button className="bg-game-purple hover:bg-game-purple/90 rounded-l-none">
                OK
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-game-gray/30 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 GameKeys.Store. Все права защищены.
          </p>
          <div className="flex items-center space-x-6">
            <img src="https://placehold.co/40x25/9b87f5/ffffff?text=VISA" alt="Visa" className="h-6" />
            <img src="https://placehold.co/40x25/9b87f5/ffffff?text=MC" alt="MasterCard" className="h-6" />
            <img src="https://placehold.co/40x25/9b87f5/ffffff?text=MIR" alt="Mir" className="h-6" />
            <img src="https://placehold.co/40x25/9b87f5/ffffff?text=PayPal" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GameFooter;
