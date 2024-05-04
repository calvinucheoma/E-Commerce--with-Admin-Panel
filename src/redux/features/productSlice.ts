import { IProduct } from '@/app/admin/dashboard/page';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IProduct = {
  _id: '',
  imgSrc: '',
  fileKey: '',
  name: '',
  price: '',
  category: '',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;

// In the 'setProduct' function, the state is not being updated directly because the purpose of this reducer is to
// replace the entire product state with a new product object. This is useful when you want to set or update the
// product state with a completely new product object.

// In the reducer function, 'return action.payload;' simply returns the new product object received as the action payload.
// When you dispatch the 'setProduct' action with a new product object, Redux internally handles the state update process.
// Redux takes care of updating the state by replacing the existing product state with the new product object provided in the action payload.
// This happens behind the scenes in Redux's state management process, so you don't need to explicitly return the updated state in this case.

// So, in summary, even though the 'setProduct' reducer doesn't explicitly return an updated state, Redux handles the
// state update internally by replacing the existing product state with the new product object provided in the action payload.
