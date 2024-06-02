import { Button } from '../button/Button';
import { calcTotalPrice } from '../utils';
import {CartItem} from "../cart-item/CartItem"
import { useAutoAnimate } from '@formkit/auto-animate/react'


export const CartMenu = ({
  items,
  onClick,
}: {
  items: any[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  console.log(items);
  return (
    <div className="absolute top-7	left-[-300px] py-4 px-5 z-20	w-96	bg-zinc-800	rounded-lg	">
      <div ref={parent} className="mt-0 my-5 px-0	border-b-[1px]	border-zinc-500">
        {items.length > 0 ? items.map((game):any => <CartItem key={game.title} price={game.price} title={game.title}/>) : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className="flex justify-between mb-4 ">
          <div className="">
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} ₴</span>
          </div>
          <Button onClick={onClick}>Оформить заказ</Button>
        </div>
      ) : null}
    </div>
  );
};
