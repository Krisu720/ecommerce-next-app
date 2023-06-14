import { NextResponse } from "next/server";
import { prisma } from "./prismaSingleton";

export const getProductById = async (id: string) => {
  const product = prisma.product.findUnique({ where: { id } });
  if (product) {
    return product;
  } 
};
