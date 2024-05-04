
export const GameGenre = ({ genre }: {genre: string}) => {
  return (
    <span className="rounded-xl py-0.5	px-1.5 bg-neutral-600 text-[13px]	 text-center">
      {genre}
    </span>
  );
};
