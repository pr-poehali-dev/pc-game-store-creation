import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredGames = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=900&auto=format&fit=crop",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    platform: "PC",
    genre: "RPG, Шутер, Открытый мир",
  },
  {
    id: 2,
    title: "Grand Theft Auto V",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=900&auto=format&fit=crop",
    price: 899,
    platform: "PC",
    genre: "Экшен, Приключения",
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    image:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=900&auto=format&fit=crop",
    price: 1499,
    oldPrice: 2499,
    discount: 40,
    platform: "PC",
    genre: "Приключения, Вестерн",
  },
  {
    id: 4,
    title: "FIFA 23",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=900&auto=format&fit=crop",
    price: 2999,
    platform: "PC",
    genre: "Спорт, Симулятор",
  },
  {
    id: 5,
    title: "Assassin's Creed Valhalla",
    image:
      "https://images.unsplash.com/photo-1605806616949-59450e59a6e9?q=80&w=900&auto=format&fit=crop",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    platform: "PC",
    genre: "Экшен, RPG, Викинги",
  },
  {
    id: 6,
    title: "Minecraft",
    image:
      "https://images.unsplash.com/photo-1587573454014-26ec95a14afb?q=80&w=900&auto=format&fit=crop",
    price: 799,
    platform: "PC",
    genre: "Песочница, Приключения",
  },
  {
    id: 7,
    title: "The Witcher 3: Wild Hunt",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop",
    price: 799,
    oldPrice: 1299,
    discount: 38,
    platform: "PC",
    genre: "RPG, Фэнтези, Открытый мир",
  },
  {
    id: 8,
    title: "Elden Ring",
    image:
      "https://images.unsplash.com/photo-1640079454330-41a222eb77ec?q=80&w=900&auto=format&fit=crop",
    price: 2499,
    platform: "PC",
    genre: "RPG, Фэнтези, Экшен",
  },
];

const GameGrid = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Популярные игры</h2>
          <Link to="/catalog">
            <Button
              variant="outline"
              className="border-game-purple/50 text-white hover:bg-game-purple/10"
            >
              Все игры
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {featuredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              image={game.image}
              price={game.price}
              oldPrice={game.oldPrice}
              discount={game.discount}
              platform={game.platform}
              genre={game.genre}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
