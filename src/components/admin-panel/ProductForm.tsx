'use client';

import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import { UploadButton } from '@/utils/uploadthing';
import axios from 'axios';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}

const ProductForm = () => {
  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: '',
    category: '',
    price: '',
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));

    axios
      .post('/api/add_product', payload)
      .then((res) => {
        makeToast('Product added successfully!');
        setPayload({
          imgSrc: null,
          fileKey: null,
          name: '',
          category: '',
          price: '',
        });
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  // If you're using the '.then' chain method, you don't necessarily need to mark the function as async.
  // You can handle asynchronous behavior using the '.then' and '.catch' methods.

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        src={payload.imgSrc ? payload.imgSrc : '/placeholder-image.png'}
        alt="product_image"
        className="max-h-[300px] w-auto object-contain rounded-md"
        width={800}
        height={500}
      />

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log(res);
          setPayload({
            ...payload,
            imgSrc: res[0].url,
            fileKey: res[0].key,
          });
          makeToast('Upload Completed');
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log(`ERROR! ${error.message}`);
        }}
      />

      <div>
        <label htmlFor="productName" className="block ml-1">
          Product Name
        </label>
        <input
          type="text"
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          value={payload.name}
          onChange={(e) => setPayload({ ...payload, name: e.target.value })}
          id="productName"
          required
        />
      </div>

      <div>
        <label htmlFor="productCategory" className="block ml-1">
          Product Category
        </label>
        <input
          type="text"
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          value={payload.category}
          onChange={(e) => setPayload({ ...payload, category: e.target.value })}
          id="productCategory"
          required
        />
      </div>

      <div>
        <label htmlFor="productPrice" className="block ml-1">
          Product Price
        </label>
        <input
          type="text"
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          value={payload.price}
          onChange={(e) => setPayload({ ...payload, price: e.target.value })}
          id="productPrice"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-pink text-white px-8 py-2 rounded-md"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
