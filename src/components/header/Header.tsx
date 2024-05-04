import { Link } from 'react-router-dom';
import {CartBlock} from '../cart/CartBlock'

export const Header = () => {
  return (
    <div className="flex h-20	justify-between	items-center mb-7">
      <div className="flex grow">
        <Link to="/" className="text-2xl font-semibold text-white">
          Game Store
        </Link>
      </div>
      <div className="text-white justify-end"><CartBlock/></div>
    </div>
  );
};
