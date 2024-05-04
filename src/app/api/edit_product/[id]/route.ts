import Product from '@/utils/models/Product';
import { connectMongoDB } from '@/utils/mongoConnect';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest, URLParams: any) => {
  try {
    const body = await request.json();

    const id = URLParams.params.id;

    const { name, category, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });

    return NextResponse.json(
      { msg: 'Updated successfully', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, msg: 'Something went wrong' },
      { status: 500 }
    );
  }
};
