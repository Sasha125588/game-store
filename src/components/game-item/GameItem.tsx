import {useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { GameBuy } from '../game-buy/GameBuy';
import { GameGenre } from '../game-genre/GameGenre';
import { setCurrentGame } from "../../redux/games/reducer";

type Props = {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export const GameItem = ({ game }: { game: Props }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }
  return (
    <div className="w-[300px] h-[270px] relative 	rounded-xl text-white bg-zinc-900" onClick={handleClick}>
      <img className="rounded-t-xl" src={game.thumbnail} />
      <div className="mx-4 mt-1.5">
        <span className="font-bold text-base">{game.title}</span>
        <div className="mt-1 mb-1 flex 	">
          <GameGenre genre={game.genre} key={game.id} />
        </div>
        <div className="relative right-0  text-sm	">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
