import Product from '@/utils/models/Product';
import { connectMongoDB } from '@/utils/mongoConnect';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (request: NextRequest, URLParams: any) => {
  try {
    const id = URLParams.params.id;

    await connectMongoDB();

    await Product.findByIdAndDelete(id);

    return NextResponse.json(
      { msg: 'Product deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, msg: 'Something went wrong' },
      { status: 500 }
    );
  }
};
