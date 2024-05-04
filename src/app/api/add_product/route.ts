import Product from '@/utils/models/Product';
import { connectMongoDB } from '@/utils/mongoConnect';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const { imgSrc, fileKey, name, category, price } = body;

    await connectMongoDB();

    const data = await Product.create({
      imgSrc,
      fileKey,
      name,
      category,
      price,
    });

    return NextResponse.json(
      { msg: 'Product added successfully', data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, msg: 'Something went wrong' },
      { status: 500 }
    );
  }
};
