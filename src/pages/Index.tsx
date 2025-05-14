
import GameHeader from '@/components/GameHeader';
import GameHero from '@/components/GameHero';
import GameCategories from '@/components/GameCategories';
import GameGrid from '@/components/GameGrid';
import GamePromo from '@/components/GamePromo';
import GameFooter from '@/components/GameFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <GameHeader />
      <main>
        <GameHero />
        <GameCategories />
        <GameGrid />
        <GamePromo />
      </main>
      <GameFooter />
    </div>
  );
};

export default Index;
