
export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className="absolute w-5 h-5 rounded-2xl bg-red-600	z-20 flex text-sm	justify-center items-center	text-white	left-3.5	top-[-10px]">
      {quantity}
    </div>
  ) : null;
};
