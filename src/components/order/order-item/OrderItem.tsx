import { useDispatch } from 'react-redux';
import { GameCover } from '../../game-cover/GameCover';
import {AiOutlineCloseCircle} from "react-icons/ai"
import { deleteItemFromCart } from '../../../redux/cart/reducer';

export const OrderItem = ({ game }: {game:any}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }


  return (
    <div className="flex mb-7	text-white bg-black w-full justify-between">
      <div className="flex mr-96">
        <div className="w-[400px]">
          <GameCover image={game.thumbnail} />
        </div>
        <div className="text-2xl font-bold">
          <span>{game.title}</span>
        </div>
      </div>
      <div className="text-2xl font-bold flex gap-2">
        <span className="">{game.price} ₴</span>
        <AiOutlineCloseCircle size={25} className="cursor-pointer " onClick={handleClick} />
      </div>
    </div>
  );
};
