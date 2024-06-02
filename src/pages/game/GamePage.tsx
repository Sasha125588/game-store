import { useSelector } from 'react-redux';
import { GameGenre } from '../../components/game-genre/GameGenre';
import { GameBuy } from '../../components/game-buy/GameBuy';

export const GamePage = () => {
  const game = useSelector((state: any) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className="text-white bg-black h-screen flex justify-center ">
      <div className="">
        <div className="w-[1200px] h-[500px] bg-zinc-700 rounded-lg flex justify-between p-4">
          <div className="w-[70%] flex flex-col items-center">
            <h1 className="mb-2 text-xl	">{game.title}</h1>
            <img className="rounded-lg w-[90%] h-[90%]" src={game.thumbnail} />
          </div>
          <div className="w-[30%] mt-5 flex flex-col justify-between	">
            <div>
              <p>{game.short_description}</p>
              <div className="flex items-center mt-3">
                <p className="mr-1.5">Жанр:</p>
                <div>
                  <GameGenre genre={game.genre} key={game.id} />
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-3 ">
              <GameBuy game={game} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
