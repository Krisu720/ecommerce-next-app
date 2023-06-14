import { prisma } from "@/lib/prismaSingleton";
import { Order } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data: Order = await req.json();
  const res = await prisma.order.create({
    data: {
      cityTown: data.cityTown,
      price: data.price,
      email: data.email,
      firstName: data.firstName,
      address: data.address,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      paymentMethod: data.paymentMethod,
      products: data.products,
      zipCode: data.zipCode,
      code: data.code,
      userId: data.userId,
    },
  });
  return NextResponse.json({id:res.id});
};
