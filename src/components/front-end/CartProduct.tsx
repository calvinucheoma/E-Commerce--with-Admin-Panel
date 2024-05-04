import { removeFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';

interface PropsType {
  id: string;
  img: string;
  title: string;
  quantity: number;
  price: number;
}

const CartProduct = ({ id, img, title, price, quantity }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={img}
          alt={title}
          className="h-[80px]"
          height={80}
          width={80}
        />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ₦{price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
