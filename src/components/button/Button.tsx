
export const Button = ({
  onClick,
  children,
  size = 's',
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className="rounded-2xl cursor-pointer py-[3px] px-2 bg-purple-400 text-black font-semibold text-base	text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
