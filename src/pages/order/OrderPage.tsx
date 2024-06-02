import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order/order-item/OrderItem';

export const OrderPage = () => {
  const items = useSelector((state:any) => state.cart.itemsInCart)

  if(items.length < 1) {
    return <h1 className="text-white font-semibold text-2xl bg-black h-screen flex justify-center w-full">Корзина пуста</h1>
  }

  return (
    <div className="text-white bg-black h-screen flex justify-center w-full">
        <div>
          {items.map((game: any) => <OrderItem game={game} />)}
        </div>
    </div>
  );
};
