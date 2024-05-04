import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import Image from 'next/image';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';

interface IProdcut {
  id: string;
  img: string;
  title: string;
  category: string;
  price: number;
}

const ProductCard = ({ id, img, title, category, price }: IProdcut) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = { id, img, title, category, price, quantity: 1 };

    dispatch(addToCart(payload));

    makeToast('Added to cart');
  };
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <Image
          src={img}
          alt={title}
          className="inline-block"
          width={200}
          height={200}
        />
      </div>

      <div className="px-8 py-4">
        <p className="text-gray-500 font-medium text-[14px]">{category}</p>
        <h2 className="font-medium">{title}</h2>

        <div className="mt-3 flex items-center text-[#FFB21D]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 ml-2 text-[14px]">(3 reviews)</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">₦{price}</h2>
          <div
            className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart /> Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
