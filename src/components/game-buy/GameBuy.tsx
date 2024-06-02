import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/Button';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';


export const GameBuy = ({ game }: {game:any}) => {

  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.itemsInCart);
  const isItemInCart = items.some((item: { id: any; }) => item.id === game.id);

  const handleClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="flex justify-end gap-3 items-center">
      <span>{game.price} ₴</span>
      <Button onClick={handleClick}>
        {isItemInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
      </Button>
    </div>
  );
};
