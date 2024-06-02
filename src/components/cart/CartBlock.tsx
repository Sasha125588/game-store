import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/CartMenu';
import { ItemsInCart } from '../items-in-cart/ItemsInCart';
import { calcTotalPrice } from '../utils';
import { useCallback, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [parent] = useAutoAnimate(/* optional config */);
  const items = useSelector((state:any) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuOpen(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div ref={parent} className="text-white flex items-center relative">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cursor-pointer relative"
        onClick={() => setIsCartMenuOpen(!isCartMenuOpen)}
      />
      {totalPrice > 0 ? (
        <span className="text-lg font-bold ml-2.5	">{totalPrice} ₴</span>
      ) : null}
      {isCartMenuOpen && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
