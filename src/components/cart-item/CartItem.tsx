export const CartItem = ({ title, price, id }) => {
  return (
    <div className="w-full flex justify-between	py-2.5	px-0 items-center ">
      <span>{title}</span>
      <div className="flex items-center">
        <span>{price} ₴</span>
      </div>
    </div>
  );
};
