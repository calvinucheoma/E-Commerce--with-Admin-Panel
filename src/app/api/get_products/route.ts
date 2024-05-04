import Product from '@/utils/models/Product';
import { connectMongoDB } from '@/utils/mongoConnect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectMongoDB();

    const data = await Product.find();

    return new NextResponse(JSON.stringify(data), { status: 200 });
    // return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error, msg: 'Something went wrong' },
      { status: 500 }
    );
  }
};
